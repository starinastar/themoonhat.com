import fetch from "node-fetch";

const API_ENDPOINT =
  "https://https://jsonplaceholder.typicode.com/todos/1";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: `${data.title} ${data.completed}`
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
