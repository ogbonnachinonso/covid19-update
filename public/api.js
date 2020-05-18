fetch("https://nigeria-covid-19.p.rapidapi.com/api/states", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "nigeria-covid-19.p.rapidapi.com",
    "x-rapidapi-key": "18b8aae03fmshd1582dbdad54c87p189b5bjsn590e74c4ca42",
  }
}).then(response => {
    console.log(response)
}).catch(err => {
    console.log(err);
});

