const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
let dataArray = [
  {
    id: 1,
    nama: "mey",
    umur: 20,
    nim: 210180096,
  },
];

app.get("/api/get-user", (req, res) => {
  res.json({
    message: "succes get user",
    data: dataArray,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.post("/api/create-user", function (req, res) {
  const { id, nama, umur, nim } = req.body;

  dataArray.push({
    id: id,
    nama: nama,
    umur: umur,
    nim: nim,
  });
  res.json({
    message: "succes post data",
  });
});
app.put("/api/put-user", function (req, res) {
  const { id, nama, umur } = req.body;

  const dataBaru = {
    id: id,
    nama: nama,
    umur: umur,
  };
  for (let index = 0; index < dataArray.length; index++) {
    if (id == dataArray[index].id) {
      dataArray.splice(index, 1, dataBaru);
    }
  }
  app.delete("/api/delete-user", function (req, res) {
    const { id } = req.body;

    for (let index = 0; index < dataArray.length; index++) {
      if (id == dataArray[index].id) {
        dataArray.splice(index, 1);
      }
    }
  });
  res.json({
    message: "data berhasil di ubah",
  });
});
