import express from 'express';
import axios from "axios";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));





app.get("/", async (req, res) => {

    try {
      const response = await axios.get("https://api.github.com/users/octocat");
      const result = response.data;
      res.render("index.ejs", { data: result });
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
  });

app.post("/post", async (req,res) => {

  const username = req.body.username.trim();

    if(!username) {
        res.render("index.ejs", { error: "The username can't be empty"});
    }

    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        const result = response.data;
        res.render("index.ejs", { data: result});
    } catch (error) {
        console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
});

app.listen(port, () => {
    console.log(`Server is hosted on port ${port}`);
});

