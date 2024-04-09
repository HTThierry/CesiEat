const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * @api {post} / Create User
 * @apiName CreateUser
 * @apiGroup Users
 * @apiDescription Create a new user in the database.
 *
 * @apiBody {String} firstName User's first name.
 * @apiBody {String} lastName User's last name.
 * @apiBody {String} email User's email address.
 * @apiBody {String} phone User's phone number.
 * @apiBody {String} password User's password.
 * @apiBody {Number} age User's age.
 * @apiBody {String} address User's address.
 * @apiBody {String} city User's city.
 * @apiBody {Number} postalCode User's postal code.
 *
 * @apiExample {json} Request-Example:
 *     {
 *       "firstName": "John",
 *       "lastName": "Doe",
 *       "email": "john.doe@example.com",
 *       "phone": "1234567890",
 *       "password": "password123",
 *       "age": 30,
 *       "address": "123 Street",
 *       "city": "City",
 *       "postalCode": 12345
 *     }
 *
 * @apiSuccess {Object} user The created user object.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *       "user": {
 *         "id": "1",
 *         "firstName": "John",
 *         "lastName": "Doe",
 *         "email": "john.doe@example.com",
 *         ...
 *       }
 *     }
 *
 * @apiError UserNotCreated The user could not be created.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "UserNotCreated"
 *     }
 */
router.post('/', userController.createUser);

/**
 * @api {get} / Get All Users
 * @apiName GetAllUsers
 * @apiGroup Users
 * @apiDescription Retrieve a list of all users.
 *
 * @apiSuccess {Array} users List of user objects.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "id": "1",
 *         "firstName": "John",
 *         "lastName": "Doe",
 *         ...
 *       },
 *       {
 *         "id": "2",
 *         "firstName": "Jane",
 *         "lastName": "Doe",
 *         ...
 *       }
 *     ]
 *
 * @apiError NoUsersFound No users were found.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "NoUsersFound"
 *     }
 */
router.get('/', userController.getAllUsers);

/**
 * @api {get} /:id Get User By ID
 * @apiName GetUserById
 * @apiGroup Users
 * @apiDescription Retrieve a single user by their ID.
 *
 * @apiParam {String} id Unique identifier of the user.
 *
 * @apiExample {json} Request-Example:
 *     /1
 *
 * @apiSuccess {Object} user The user object.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "firstName": "John",
 *       "lastName": "Doe",
 *       "email": "john.doe@example.com",
 *       ...
 *     }
 *
 * @apiError UserNotFound The user was not found.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
router.get('/:id', userController.getUserById);

/**
 * @api {put} /:id Update User
 * @apiName UpdateUser
 * @apiGroup Users
 * @apiDescription Update a user's information.
 *
 * @apiParam {String} id Unique identifier of the user.
 *
 * @apiExample {json} Request-Example:
 *     /1
 *
 * @apiSuccess {Object} user The updated user object.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "firstName": "John",
 *       "lastName": "Doe",
 *       "email": "john.update@example.com",
 *       ...
 *     }
 *
 * @apiError UserNotFound The user was not found.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
router.put('/:id', userController.updateUser);

/**
 * @api {delete} /:id Delete User
 * @apiName DeleteUser
 * @apiGroup Users
 * @apiDescription Delete a user by their ID.
 *
 * @apiParam {String} id Unique identifier of the user to delete.
 *
 * @apiExample {json} Request-Example:
 *     /1
 *
 * @apiSuccess {String} message Success message stating user was deleted.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "User deleted successfully"
 *     }
 *
 * @apiError UserNotFound The user was not found.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
router.delete('/:id', userController.deleteUser);

module.exports = router;
