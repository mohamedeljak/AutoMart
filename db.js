const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL

});

pool.on('connect', () => {
  console.log('connected to the db');
});

/////////////////////  Create table Users
const createTables = async () => {
  const queryText =
    `CREATE TABLE IF NOT EXISTS
      users(
        id UUID PRIMARY KEY,
        email VARCHAR(128) NOT NULL,
        first_name VARCHAR(128) NOT NULL,
        last_name VARCHAR(128) NOT NULL,
        token VARCHAR(200) NOT NULL,
        address VARCHAR(128) NOT NULL,
        is_admin VARCHAR(6) NOT NULL,
        password VARCHAR(128) NOT NULL,
        created_date TIMESTAMP DEFAULT NOW(),
        modified_date TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS
      cars(
        id UUID PRIMARY KEY,
        user_id VARCHAR(128) NOT NULL,
        email VARCHAR(128) NOT NULL,
        manufacture VARCHAR(128) NOT NULL,
        model  VARCHAR(128) NOT NULL,
        price VARCHAR(128) NOT NULL,
        status VARCHAR(128) NOT NULL,
        created_date TIMESTAMP,
        modified_date TIMESTAMP
      );

CREATE TABLE IF NOT EXISTS
      orders(
        id UUID PRIMARY KEY,
        user_id VARCHAR(128) NOT NULL,
        car_id VARCHAR(128) NOT NULL,
        price VARCHAR(128) NOT NULL,
        price_offered VARCHAR(128) NOT NULL,
        created_date TIMESTAMP DEFAULT NOW(),
        modified_date TIMESTAMP
      )      

      `;

  await pool.query(queryText)
  //await pool.end();
}

createTables();

/////////////////////// End create table users 

module.exports.pool = pool;  