const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  let product = req.params.id;
  let sql = `SELECT * FROM products`;

  console.log(sql);

  req.app.locals.con.query(sql, (error, result) => {
    for (let i = 0; i < result.length; i++) {
      if (result[i].productName == product) {
        res.send([result[i]]);
      }
    }
    if (error) {
      console.log("error", error);
    }
  });
});
module.exports = router;
