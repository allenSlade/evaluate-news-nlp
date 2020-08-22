let AylienNewsApi = require("aylien-news-api");
let api = new AylienNewsApi.DefaultApi();
let defaultClient = AylienNewsApi.ApiClient.instance;

async function handleSubmit(event) {
  event.preventDefault()

  // check what text was put into the form field
  let formText = document.getElementById('name').value
  Client.checkForName(formText)
  console.log(formText)
  console.log("Form Submitted!")

  let opts = {
    // title: "trump",
    body: formText,
    // sortBy: "social_shares_count.facebook",
    language: ["en"],
    publishedAtStart: "NOW-7DAYS",
    publishedAtEnd: "NOW"
  };

  fetch('http://localhost:8081/api-news', {
    method: 'POST',
    body: JSON.stringify(opts),
    headers: {
      'content-type': 'application/json'
    }})
  .then(res => res.json())
  .then (opts => {
    console.log('success', opts);
    document.getElementById('author').innerHTML = opts.stories[0].author.name;
    document.getElementById('links').innerHTML = opts.stories[0].links.permalink;
    document.getElementById('sentiment').innerHTML = opts.stories[0].sentiment.body.polarity;
    document.getElementById('summary').innerHTML = opts.stories[0].title;

    document.getElementById('author3').innerHTML = opts.stories[3].author.name;
    document.getElementById('links3').innerHTML = opts.stories[3].links.permalink;
    document.getElementById('sentiment3').innerHTML = opts.stories[3].sentiment.body.polarity;
    document.getElementById('summary3').innerHTML = opts.stories[3].title;

    document.getElementById('author5').innerHTML = opts.stories[5].author.name;
    document.getElementById('links5').innerHTML = opts.stories[5].links.permalink;
    document.getElementById('sentiment5').innerHTML = opts.stories[5].sentiment.body.polarity;
    document.getElementById('summary5').innerHTML = opts.stories[5].title;
  })
  .catch(error => {
    console.log('error', error)
  })
}

export { handleSubmit }

const updateUISuccess = function(data) {
  const parsedData = JSON.parse(data);
  console.log(data);
  let formText = parsedData.stories;
}

const updateUI = async() => {
  const req = await fetch('/');
  try {
    const allData = await req.json()
    document.getElementById('results').innerHTML = opts;
  } catch(error) {
    console.log('error', error)
  }
};
