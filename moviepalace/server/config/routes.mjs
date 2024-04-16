import db from "./db.mjs";
import express from "express";


const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection(req.baseUrl.replace('/','').replace('/',''));
  let results = await collection.find({}).toArray();

  res.send(results).status(200);
});

// Get a single user
router.get("/:id", async (req, res) => {
  let collection = await db.collection(req.baseUrl.replace('/',''));
  let query = {_id: req.params.id};
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// Add a new document to the collection
router.post("/", async (req, res) => {
  let collection = await db.collection(req.baseUrl.replace('/',''));
  let newDocument = req.body;
  newDocument.date = new Date();
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

// Update the post with a new comment
router.patch("/:id", async (req, res) => {
  const query = { _id: req.params.id };
  const updates = {
    $push: { comments: req.body }
  };

  let collection = await db.collection(req.baseUrl.replace('/',''));
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

// Delete an entry
router.delete("/:id", async (req, res) => {
  const query = { _id: req.params.id };

  const collection = db.collection(req.baseUrl.replace('/',''));
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;