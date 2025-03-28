const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/metadata", async (req, res) => {
  const response = await axios.get('http://fhir:8080/fhir/metadata');

  console.log(response.data)
  
  res.json("HELLO");
});

module.exports = router;
