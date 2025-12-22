import { useEffect, useState } from 'react'
import { getUsers, createUser } from './api/users.api'

function App() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')

  useEffect(() => {
    getUsers().then(setUsers)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newUser = {
      name
    }

    const created = await createUser(newUser)
    setUsers([...users, created])

    setName('')
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Usuarios</h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <input
          className="border p-2 mr-2"
          placeholder="Nombre"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2">
          Crear
        </button>
      </form>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
