const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const express = require('express');
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js');

let AylienNewsApi = require("aylien-news-api");

let defaultClient = AylienNewsApi.ApiClient.instance;

let app_id = defaultClient.authentications["app_id"];
app_id.apiKey = process.env["NEWSAPI_APP_ID"];

let app_key = defaultClient.authentications["app_key"];
app_key.apiKey = process.env["NEWSAPI_APP_KEY"];

let api = new AylienNewsApi.DefaultApi();

console.log(`Your API key is ${process.env.NEWSAPI_APP_KEY}`);

const app = express()

app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

app.use(express.json());

let projectData = {};

app.post('/api-news', function (req, res) {
  let callback = function(error, data, response) {
    if (error) {
      res.status(500).send(error);
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: ");
      console.log("========================================");
      res.json(data);
      for (let i = 0; i < data.stories.length; i++) {
        console.log(data.stories[i].title + " / " + data.stories[i].source.name);
      }
    }
  };
  api.listStories(req.body, callback);
  // api.listStories(opts, callback);
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})



// app.post('/stories', function (req, res) {
// console.log('Response:', req.body);
// let newEntry = {
//     date: req.body.date,
//     temp: req.body.temp,
//     content: req.body.content
//   }
//   projectData = newEntry;
//   console.log(projectData);
//   res.send(projectData);
// });
