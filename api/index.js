
const app = require("./app");

const port = process.env.PORT || 5050

app.listen(port, (err) => {
  console.log(`server on: localhost:${port}`);
});