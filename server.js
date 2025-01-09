const express = require("express");
const app = express();
const PORT = 3000;

const apiUrl = "https://api.webflow.com/v2/collections/67761a367172d5876d96a947/items/67761b0af9a4fdbc2133c658";
const token = "7654c6f2eb5f6d6b97ff260c58c3a8eef2c3caf83c76ed14a783613542ed17ba";

// Serve static files from the "public" directory
app.use(express.static("public"));

// Endpoint to fetch data from the Webflow API
app.get("/api/webflow-data", async (_req, res) => {
    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
     console.log(response)
        if (!response.ok) {
            return res.status(response.status).json({ error: `Error: ${response.statusText}` });
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});