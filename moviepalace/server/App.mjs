import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import router from "./config/routes.mjs";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /users routes
app.use("/users", router);
app.use("/movies",router);
app.use("/object_role",router);
app.use("/object_role_users_cross",router);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

export default PORT;