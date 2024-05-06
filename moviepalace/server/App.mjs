import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import users from "./config/user-routes.mjs";
import movies from "./config/movies-routes.mjs";
import object_role from "./config/object-role-routes.mjs";
import object_role_users_cross from "./config/object-role-cross-routes.mjs";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

// Load the routes
app.use("/users", users);
app.use("/movies",movies);
app.use("/object_role",object_role);
app.use("/object_role_users_cross", object_role_users_cross);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send(err)
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

export default PORT;