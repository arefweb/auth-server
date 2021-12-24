const approot = require("./api/index");

const port = process.env.PORT || 5050;

approot.listen(port, (err) => {
  console.log(`server on: localhost:${port}`);
});
