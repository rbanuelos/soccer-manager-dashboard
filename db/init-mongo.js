db.createUser(
  {
    user: 'dt',
    pwd: 'dt',
    roles: [{
      role: 'readWrite',
      db: 'soccer-manager-db'
    }]
  }
)
