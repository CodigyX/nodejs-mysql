require('dotenv').config()
module.exports = {
  "development": {
   "url": process.env.DEV_DATABASE_URL,
    "dialect": "mysql"
  },
  "test": {
    "url": process.env.DEV_DATABASE_URL,
    "dialect": "mysql"
  },
  "production": {
    "url": process.env.DEV_DATABASE_URL,
    "dialect": "mysql"
  }
}