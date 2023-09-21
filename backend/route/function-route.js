const express = require("express");

const FunctionController = require("../controller/function-controller");

const router = express.Router();

router.get("/getSortedTree", FunctionController.getSortedTree);

module.exports = router;
