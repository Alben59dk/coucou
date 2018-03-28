let express = require('express')
let router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Hey ! It\'s a GET')
})
/* GET user with ID. */
router.put('/:id([a-zA-Z]+)', function (req, res, next) {
  res.send('Hey my name is ' + req.params.id)
})

/* POST user creation. */
router.delete('/:id(\\d+)', function (req, res, next) {
  res.send('Hey It\'s a Delete ID' + req.params.id)
})

module.exports = router
