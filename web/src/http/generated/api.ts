/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Live typed full-stack
 * OpenAPI spec version: 1.0.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
export type GetUserById404 = {
  message: string;
};

export type GetUserById200 = {
  id: string;
  name: string;
};

export type ListAllUsers200Item = {
  id: string;
  name: string;
};

export type CreateUser201 = { [key: string]: unknown };

export type CreateUserBody = {
  name: string;
};





/**
 * Create User
 */
export type createUserResponse = {
  data: CreateUser201;
  status: number;
  headers: Headers;
}

export const getCreateUserUrl = () => {


  return `http://localhost:3333/users`
}

export const createUser = async (createUserBody: CreateUserBody, options?: RequestInit): Promise<createUserResponse> => {
  
  const res = await fetch(getCreateUserUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createUserBody,)
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getCreateUserMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createUser>>, TError,{data: CreateUserBody}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof createUser>>, TError,{data: CreateUserBody}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof createUser>>, {data: CreateUserBody}> = (props) => {
          const {data} = props ?? {};

          return  createUser(data,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CreateUserMutationResult = NonNullable<Awaited<ReturnType<typeof createUser>>>
    export type CreateUserMutationBody = CreateUserBody
    export type CreateUserMutationError = unknown

    export const useCreateUser = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createUser>>, TError,{data: CreateUserBody}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof createUser>>,
        TError,
        {data: CreateUserBody},
        TContext
      > => {

      const mutationOptions = getCreateUserMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
/**
 * List all Users
 */
export type listAllUsersResponse = {
  data: ListAllUsers200Item[];
  status: number;
  headers: Headers;
}

export const getListAllUsersUrl = () => {


  return `http://localhost:3333/users`
}

export const listAllUsers = async ( options?: RequestInit): Promise<listAllUsersResponse> => {
  
  const res = await fetch(getListAllUsersUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getListAllUsersQueryKey = () => {
    return [`http://localhost:3333/users`] as const;
    }

    
export const getListAllUsersQueryOptions = <TData = Awaited<ReturnType<typeof listAllUsers>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof listAllUsers>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getListAllUsersQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof listAllUsers>>> = ({ signal }) => listAllUsers({ signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof listAllUsers>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type ListAllUsersQueryResult = NonNullable<Awaited<ReturnType<typeof listAllUsers>>>
export type ListAllUsersQueryError = unknown


export function useListAllUsers<TData = Awaited<ReturnType<typeof listAllUsers>>, TError = unknown>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof listAllUsers>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof listAllUsers>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useListAllUsers<TData = Awaited<ReturnType<typeof listAllUsers>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof listAllUsers>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof listAllUsers>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useListAllUsers<TData = Awaited<ReturnType<typeof listAllUsers>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof listAllUsers>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useListAllUsers<TData = Awaited<ReturnType<typeof listAllUsers>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof listAllUsers>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getListAllUsersQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Get user by id
 */
export type getUserByIdResponse = {
  data: GetUserById200;
  status: number;
  headers: Headers;
}

export const getGetUserByIdUrl = (id: string,) => {


  return `http://localhost:3333/users/${id}`
}

export const getUserById = async (id: string, options?: RequestInit): Promise<getUserByIdResponse> => {
  
  const res = await fetch(getGetUserByIdUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getGetUserByIdQueryKey = (id: string,) => {
    return [`http://localhost:3333/users/${id}`] as const;
    }

    
export const getGetUserByIdQueryOptions = <TData = Awaited<ReturnType<typeof getUserById>>, TError = GetUserById404>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserById>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUserByIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUserById>>> = ({ signal }) => getUserById(id, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getUserById>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetUserByIdQueryResult = NonNullable<Awaited<ReturnType<typeof getUserById>>>
export type GetUserByIdQueryError = GetUserById404


export function useGetUserById<TData = Awaited<ReturnType<typeof getUserById>>, TError = GetUserById404>(
 id: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserById>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUserById>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUserById<TData = Awaited<ReturnType<typeof getUserById>>, TError = GetUserById404>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserById>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUserById>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUserById<TData = Awaited<ReturnType<typeof getUserById>>, TError = GetUserById404>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserById>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetUserById<TData = Awaited<ReturnType<typeof getUserById>>, TError = GetUserById404>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserById>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetUserByIdQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




