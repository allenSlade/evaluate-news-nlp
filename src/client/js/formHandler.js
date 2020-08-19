let AylienNewsApi = require("aylien-news-api");
let api = new AylienNewsApi.DefaultApi();
let defaultClient = AylienNewsApi.ApiClient.instance;

async function handleSubmit(event) {
  event.preventDefault()

  // check what text was put into the form field
  let formText = document.getElementById('name').innerText
  Client.checkForName(formText)
  console.log(formText)
  console.log("Form Submitted!")

  let opts = {
    title: "trump",
    // title: "climate change",
    // title: query.formText,
    // title: "",
    sortBy: "social_shares_count.facebook",
    language: ["en"],
    publishedAtStart: "NOW-7DAYS",
    publishedAtEnd: "NOW",
    // entitiesBodyLinksDbpedia: [
    //   "http://dbpedia.org/resource/Donald_Trump",
    //   "http://dbpedia.org/resource/Hillary_Rodham_Clinton"
    // ]
  };

  fetch('http://localhost:8081/api-news', {
    method: 'POST',
    body: JSON.stringify(opts),
    headers: {
      'content-type': 'application/json'
    }})
  .then(res => res.json())
  // .then(function(res) {
  //     let results = document.getElementById('results').innerHTML
  //     results = res.message
  //     console.log(res.message)
  .then(opts => {
    console.log('success', opts);
    let results = document.getElementById('results').innerHTML
    results = opts.message
    console.log(results);
  })
  .catch(error => {
    console.log('error', error);
  })
  // JSON.parse()
}

export { handleSubmit }

const updateUISuccess = function(data) {
  const parsedData = JSON.parse(data);
  console.log(data);
  let formText = parsedData.stories;
}
