const apiUrl = "http://localhost:3000/api/get-user";
fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
