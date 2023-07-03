const express = require('express');
const router = express.Router();
const { getLists, postList, updateList ,deleteList, getListById } = require("../controllers/listsController")

router.get('/', getLists);
router.post('/', postList);
router.get('/:listId', getListById)
router.put('/:listId', updateList);
router.delete('/:listId', deleteList);

module.exports = router;
