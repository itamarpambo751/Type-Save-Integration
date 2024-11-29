import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { getListAllUsersQueryKey, useCreateUser } from "../http/generated/api"
import { useQueryClient } from "@tanstack/react-query"

const createUserSchema = z.object({
    name: z.string().min(4, "O nome precisa ter pelo menos 4 caracteres")
})

type CreateUserSchema = z.infer<typeof createUserSchema>

export const CreateUserForm = () => {
    const queryClient = useQueryClient()

    const { register, handleSubmit, reset,  formState: { errors } } = useForm<CreateUserSchema>({
        resolver: zodResolver(createUserSchema)
    })

    const { mutateAsync: createUser } = useCreateUser()

    async function handleCreateUser(data: CreateUserSchema) {
        await createUser({ data })
        await queryClient.invalidateQueries({
            queryKey: getListAllUsersQueryKey()
        })
        reset()
    }

    return(
        <form onSubmit={handleSubmit(handleCreateUser)}>
            <input type="text" {...register("name")} />
            {errors.name && <span>{errors.name.message}</span>}
            <button type="submit">Criar usuário</button>
        </form>
    )
}