import { CreateUserForm } from "./components/create-user-form"
import { useListAllUsers } from "./http/generated/api"

function App() {
  const { data: users } = useListAllUsers()
  return (
    <div>
      {users?.data.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
      <br />
      <CreateUserForm />
    </div>
  )
}

export default App
