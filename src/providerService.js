const { server, importData } = require("./provider")
importData()

server.listen(8081, () => {
  console.log("Client Service running on http://127.0.0.1:8081")
})