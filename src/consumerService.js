const { server } = require("./consumer")

server.listen(8080, () => {
  console.log("Frontend running on http://127.0.0.1:8080")
})