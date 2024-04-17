const http = require('http');

const { getData, endpoins} = require("../appModules/api");
const staticFile = require("../appModules/http-utils/static-file");
const { makeRatingFile, config } = require('../appModules/rating');


async function mainRouteController(res, publicUrl, extname) {
    const data = await getData(endpoins.games);
    await makeRatingFile(config.PATH_TO_RATING_FILE, data);
    res.statusCode = 200;
    staticFile(res, publicUrl, extname);
  }
// async function mainRouteController(res, publicUrl, extname) {
//     res.statusCode = 200;
//     staticFile(res, publicUrl, extname);
//     const server = http.createServer((req, res) => {
//     const url = req.url;
//     switch (url) {
//       case "/":
//               mainRouteController(res, "/index.html", ".html");
//         break;
//         case "/game":
//             gameRouteController(res);
//             break;
//         case "/vote":
//             voteRouteController(req, res);
//             break;
//             default:
//              defaultRouteController(res, url);
//     }
// });
//   }
  module.exports = mainRouteController;