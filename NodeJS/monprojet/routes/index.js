let express = require('express')
let router = express.Router()

/* GET home page. */
router.get('/coucou', function (req, res, next) {
  res.render('coucou', { sayHello: 'Hello Buddy' })
})

module.exports = router
