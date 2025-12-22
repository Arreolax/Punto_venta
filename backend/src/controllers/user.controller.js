import { pool } from '../config/db.js'

export const getUsers = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM users')
  res.json(rows)
}

export const createUser = async (req, res) => {
  const { name } = req.body

  const [result] = await pool.query(
    'INSERT INTO users (name) VALUES (?)',
    [name]
  )

  res.json({
    id: result.insertId,
    name,
  })
}
