const axios = require("axios");

async function fetchData(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data.slice(0, 5);
}

module.exports = fetchData;