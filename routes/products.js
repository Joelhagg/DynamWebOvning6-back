const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  console.log(req.params);

  let sql = `SELECT productName FROM products`;

  req.app.locals.con.query(sql, (error, result) => {
    if (error) {
      console.log("error", error);
    }
    console.log(result);
  });

  res.json({ message: "success" });
});

module.exports = router;
