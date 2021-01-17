const express = require('express');
const app = express();
const cors = require("cors");
const uploadRoutes = require("./routes/api/uploads");

app.use("*", cors());
app.use(express.json());

// app.get('/api/health', (req, res) => {
//   res.status(200).send( {sucess:"bingo bango bongo"});
// });
app.use(uploadRoutes);
// Currently cannot get due to aws connection issue

app.listen(8000);