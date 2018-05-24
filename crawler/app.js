const http = require('http');
const port = process.env.PORT || 3001;

const httpHandler = (req, res) => {
  let resBody;

  if (req.method == 'GET' && req.url == '/healthcheck') {
    resBody = 'I am alive!';
  } else {
    res.statusCode = 404;
    resBody = '404 Not Found';
  }

  res.end(resBody);
};

http.createServer(httpHandler).listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Crawler web server is running on port ' + port + '...');
  }
});
