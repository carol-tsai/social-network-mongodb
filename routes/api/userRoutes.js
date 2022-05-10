// user routes we need
// get all users
// get a single user by _id and populated friend and thought data
// post a new user
// put to update a user by its _id
// removed a user by its _id with associated thoughts

// routes for friends - /api/users/:userId/friends/:friendId
// post to add a new friend to a user's friend list
// delete to remove a friend from a user's friend list

const router = require('express').Router();
const {
   getUsers,
   getSingleUser,
   createUser,
   updateUser,
   deleteUser,
   addFriend,
   removeFriend,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').put(addFriend).delete(removeFriend);

module.exports = router;