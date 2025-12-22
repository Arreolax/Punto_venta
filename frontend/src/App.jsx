import { useEffect, useState } from 'react'

function App() {
  const [mensaje, setMensaje] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/api/saludo')
      .then(res => res.json())
      .then(data => setMensaje(data.mensaje))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">
        {mensaje}
      </h1>
    </div>
  )
}

export default App
