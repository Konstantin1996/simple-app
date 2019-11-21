const express = require('express');
const meetupsController = require('../../controllers/meetupsController');

const router = express.Router();

router.get('/', meetupsController.get_list_meetup);
router.get('/:id', meetupsController.get_single_meetup);
router.get('/filter/:expr', meetupsController.filter_meetups);
router.post('/add', meetupsController.create_meetup);
router.delete('/delete/:id', meetupsController.delete_meetup);
router.put('/update/:id', meetupsController.update_meetup);


module.exports = router;
