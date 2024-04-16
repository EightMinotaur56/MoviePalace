import { MongoClient }  from 'mongodb';
const uri = "mongodb+srv://sostomi9:<password>@moviepalace.o1r5wqd.mongodb.net/?retryWrites=true&w=majority&appName=MoviePalace";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

let conn;
let db;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}finally{
  if(conn){
    console.log('db connection success');
    db = conn.db("MoviePalace");
  }
}



export default db;

