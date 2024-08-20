const { log } = require('console')
const http = require('http')

function logRequests(req, res, next){
  console.log(`${req.method} ${req.url}`)
  next()
}
function errorHandler(err, req, res, next){
  console.error('An Error Ocuured!')
  res.statusCode = 500
  res.end("Oops! Incorrect route!")
}

function reqHandler(req, res) {
    if (req.url === "/er"){
      res.end("Error Occurred!")
    }
    else {
    res.statusCode = 200
    res.end('Everything is fine!')
    }
  }
const server = http.createServer((req, res) => {
  try {
      logRequests(req, res, () => {
          reqHandler(req, res);
      });
  } catch (err) {
      errorHandler(err, req, res, () => {});
  }
});

server.listen(5500, ()=> {
  console.log(`Server is runnning at http://localhost:5500`)
})
