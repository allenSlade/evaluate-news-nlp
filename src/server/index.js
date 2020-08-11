const dotenv = require('dotenv');
dotenv.config();

let path = require('path')
const express = require('express')
const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')
// let aylien = require("aylien_textapi");

// textapi.sentiment({
//   'text': 'John is a very good football player!'
// }, function(error, response) {
//   if (error === null) {
//     console.log(response);
//   }
// });
var AylienNewsApi = require("aylien-news-api");

var defaultClient = AylienNewsApi.ApiClient.instance;

var app_id = defaultClient.authentications["app_id"];
app_id.apiKey = process.env["NEWSAPI_APP_ID"];

var app_key = defaultClient.authentications["app_key"];
app_key.apiKey = process.env["NEWSAPI_APP_KEY"];

var api = new AylienNewsApi.DefaultApi();

var opts = {
  title: "trump",
  sortBy: "social_shares_count.facebook",
  notLanguage: ["en"],
  publishedAtStart: "NOW-7DAYS",
  publishedAtEnd: "NOW",
  entitiesBodyLinksDbpedia: [
    "http://dbpedia.org/resource/Donald_Trump",
    "http://dbpedia.org/resource/Hillary_Rodham_Clinton"
  ]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: ");
    console.log("========================================");
    for (var i = 0; i < data.stories.length; i++) {
      console.log(data.stories[i].title + " / " + data.stories[i].source.name);
    }
  }
};

api.listStories(opts, callback);

let textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});



console.log(`Your API key is ${process.env.API_KEY}`);

const app = express()

app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


let projectData = {};

app.post('/post', function (req, res) {
console.log('Response:', req.body);
// let newEntry = {
//     date: req.body.date,
//     temp: req.body.temp,
//     content: req.body.content
//   }
//   projectData = newEntry;
  console.log(projectData);
  res.send(projectData);
});
