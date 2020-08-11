// function handleSubmit(event) {
//     event.preventDefault()
//
//     // check what text was put into the form field
//     let formText = document.getElementById('name').value
//     Client.checkForName(formText)
//
//     console.log("::: Form Submitted :::")
//     fetch('http://localhost:8081/test')
//     .then(res => res.json())
//     .then(function(res) {
//         document.getElementById('results').innerHTML = res.message
//     })
// }

// export { handleSubmit }

function handleSubmit(event) {
  event.preventDefault()

  let formText = document.getElementById('name').innerText
  Client.checkForName(formText)
  console.log("Form Submitted!")

  fetch('https://api.aylien.com/news')
  .then(res => res.json())
  .then(function(res) {
      document.getElementById('results').innerHTML = res.message
  })
}

export { handleSubmit }

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
