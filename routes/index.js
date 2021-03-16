const router = require('express').Router()

router.use('/api', require('./noteroutes.js'))
router.use('/', require('./viewRoutes.js'))

module.exports = router
