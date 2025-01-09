require("dotenv").config();
const express = require("express");
const axios = require("axios"); // For making API calls
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Webflow webhook endpoint
app.post("/webflow-form", async (req, res) => {
  try {
    // ClickUp API details

    const apiUrl =
      "https://api.webflow.com/v2/collections/67761a367172d5876d96a947/items/67761b0af9a4fdbc2133c658";
    const token =
      "7654c6f2eb5f6d6b97ff260c58c3a8eef2c3caf83c76ed14a783613542ed17ba";

    // Send data to ClickUp
    const response = await axios.get(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error Data", error.message);
    res.status(500).send({ success: false, message: "Error Data." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
