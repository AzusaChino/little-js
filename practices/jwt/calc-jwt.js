const jwt = require("jsonwebtoken");
const moment = require("moment");

const appId = "aaa";

const secret = "bbb";

const token = jwt.sign(
  {
    iss: appId,
    time: moment.valueOf(),
  },
  secret
);

console.log(token);

jwt.verify(token, secret, function (err, decoded) {
  console.log(decoded); // claim object
});
