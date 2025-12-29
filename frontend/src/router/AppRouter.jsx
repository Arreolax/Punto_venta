import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../views/Login.jsx'
import Tickets from '../views/Tickets.jsx'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
