import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('./database.db')

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY, content TEXT)')

  // Example of inserting data
  const stmt = db.prepare('INSERT INTO notes (content) VALUES (?)')
  stmt.run('This is a note.')
  stmt.finalize()
})

export default db
