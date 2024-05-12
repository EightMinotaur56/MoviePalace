import db from "./db.mjs";
import express from "express";
import { ObjectId } from "mongodb";


const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection('reservations');
  let results = await collection.find({}).toArray();

  res.send(results).status(200);
});

// Get a single reservation by id
router.get("/id=:id", async (req, res) => {
  let collection = await db.collection('reservations');
  let query = {_id: new ObjectId(req.params.id)};
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// Add a new document to the collection
router.post("/", async (req, res) => {
  let collection = await db.collection('reservations');
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

  let collection = await db.collection('reservations');
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

// Delete an entry
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection('reservations');
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;