import db from "./db.mjs";
import express from "express";
import { ObjectId } from "mongodb";


const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection('object_role_users_cross');
  let results = await collection.find({}).toArray();

  res.send(results).status(200);
});

// Get a single data
router.get("/id=:id", async (req, res) => {
  let collection = await db.collection('object_role_users_cross');
  let query = {_id: new ObjectId(req.params.id)};
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

//Get from userId
router.get("/userId=:id", async (req, res) => {
  let collection = await db.collection('object_role_users_cross');
  let query = {userId: new ObjectId(req.params.id)};
  let result = await collection.find(query).toArray();

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

//get from objectRoleId
router.get("/objectRoleId=:id", async (req, res) => {
  let collection = await db.collection('object_role_users_cross');
  let query = {objectRoleId: new ObjectId(req.params.id)};
  let result = await collection.find(query).toArray();

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// Add a new document to the collection
router.post("/", async (req, res) => {
  let collection = await db.collection('object_role_users_cross');
  let newDocument = req.body;
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

// Update the post with a new comment
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates = {
    $push: req.body
  };

  let collection = await db.collection('object_role_users_cross');
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

// Delete an entry
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection('object_role_users_cross');
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;