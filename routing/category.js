const category = require('../controller.js/add_category');

const router = require('express').Router();


router.route('/add_category').post(category.add_category);
router.route('/update_category').post(category.update_category);
router.route('/delete_category').get(category.delete_category);


module.exports = router;