const express = require('express')
const app = express()
const cors = require('cors')

const errorMiddleware = require('./middlewares/error')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use("/store", storeController);
// app.use("/catagory", catagoryController);
// app.use("/menu", menuController);

app.use((req, res, next) => {
  res.status(404).json({ message: "path not found on this server" });
});

app.use(errorMiddleware);

port = 8888
app.listen(port, () => console.log(`server is running on port ${port}`))