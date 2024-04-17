import db from "./db.mjs";
import express from "express";
import { ObjectId } from "mongodb";


const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection('users');
  let results = await collection.find({}).toArray();

  res.send(results).status(200);
});

// Get a single user by id
router.get("/id=:id", async (req, res) => {
  let collection = await db.collection('users');
  let query = {_id: new ObjectId(req.params.id)};
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

router.get("/firstName=:firstName", async (req,res)=>{
  let collection = await db.collection('users');
  let query = {firstName: req.params.firstName};
  let result = await collection.find(query).toArray();

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

router.get("/lastName=:lastName", async (req,res)=>{
  let collection = await db.collection('users');
  let query = {lastName: req.params.lastName};
  let result = await collection.find(query).toArray();

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

router.get("/email=:email", async (req,res)=>{
  let collection = await db.collection('users');
  let query = {email: req.params.email};
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// Add a new document to the collection
router.post("/", async (req, res) => {
  let collection = await db.collection('users');
  let newDocument = req.body;
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

// Update the post with a new comment
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates = {
    $push: { comments: req.body }
  };

  let collection = await db.collection('users');
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

// Delete an entry
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection('users');
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;