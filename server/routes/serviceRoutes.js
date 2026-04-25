
const router = require('express').Router();
const c = require('../controllers/serviceController');

router.get('/services', c.getAll);
router.get('/services/:id', c.getOne);
router.post('/save', c.save);
router.post('/hire', c.hire);
router.get('/saved', c.saved);
router.get('/hired', c.hired);

module.exports = router;
