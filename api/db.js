import mysql from "mysql2"

export const db = mysql.createPool({
  connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'noor',
    database: 'blog',
    debug: false
})
