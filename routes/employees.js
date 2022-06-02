const express = require("express");
const router = express.Router();
router.get("/:id", (req, res) => {
  let office = req.params.id;

  let sql = `SELECT * FROM employees`;

  req.app.locals.con.query(sql, (error, result) => {
    let employeesList = [];
    for (let i = 0; i < result.length; i++) {
      if (result[i].officeCode == office) {
        employeesList.push(result[i]);
      }
    }
    res.send(employeesList);
  });
});

module.exports = router;
