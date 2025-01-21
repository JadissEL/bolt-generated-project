import express from 'express'
    import cors from 'cors'
    import sqlite3 from 'sqlite3'
    import { open } from 'sqlite'
    import dotenv from 'dotenv'

    dotenv.config()

    const app = express()
    const port = process.env.PORT || 3001

    app.use(cors())
    app.use(express.json())

    async function initializeDatabase() {
      return open({
        filename: './database.db',
        driver: sqlite3.Database
      })
    }

    initializeDatabase().then(db => {
      // Database initialization and routes here
      
      app.listen(port, () => {
        console.log(`Server running on port ${port}`)
      })
    })
