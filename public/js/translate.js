// Assuming you're using Express in a Node.js environment
const express = require("express");
const app = express();

// Serving static files (e.g., json6.json) from a directory named "public"
app.use(express.static("public"));

// Assuming json6.json is located in the "public" directory

const bt = document.getElementById('btn');
const output = document.querySelector('#translate');

const url = 'json6.json';

bt.onclick = () => {
  getdata();
};

function getdata() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // Assuming you want to display the data in the output element
            output.innerHTML = JSON.stringify(data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}
