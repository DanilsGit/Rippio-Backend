const express = require("express");
const router = express.Router();
const { search } = require("../controllers/search.controller");

router.get("/", search); // /api/search

module.exports = router;
