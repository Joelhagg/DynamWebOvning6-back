const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  req.app.locals.con.connect((error) => {
    if (error) {
      console.log(error);
    }

    let sql = `SELECT * FROM offices`;

    req.app.locals.con.query(sql, (error, result) => {
      if (error) {
        console.log("error", error);
      }
      res.send(result);
    });
  });
});

module.exports = router;
