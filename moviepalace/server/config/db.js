const mysql = require('mysql2');


const connectDB = () => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'moviepalace'
  });


  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    console.log('Connected to MySQL database');
  });

  connection.on('error', (err) => {
    console.error('MySQL database connection error:', err);
  
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      connectDB(); 
    } else {
      throw err;
    }
  });


  connection.query = (sql, values, callback) => {
    if (!callback && typeof values === 'function') {
      callback = values;
      values = [];
    }

    connection.execute(sql, values, (err, results) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, results);
    });
  };

  return connection;
};

module.exports = connectDB;
