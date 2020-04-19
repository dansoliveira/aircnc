import express from "express";

const routes = express.Router();

routes.post("/users", (req, res) => {
  return res.json({ ok: true });
});

export default routes;
