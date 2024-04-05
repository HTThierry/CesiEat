const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


/**
 * @api {post} /users Create User
 * @apiVersion 1.0.0
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
 * @apiSuccess {Object} user The created user object.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *       "id": "1",
 *       "firstName": "John",
 *       "lastName": "Doe",
 *       "email": "john.doe@example.com",
 *       "phone": "1234567890",
 *       "age": 30,
 *       "address": "123 Street",
 *       "city": "City",
 *       "postalCode": 12345
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
 * @api {get} /users Get All Users
 * @apiVersion 1.0.0
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
 * @api {get} /users/:id Get User By ID
 * @apiVersion 1.0.0
 * @apiName GetUserById
 * @apiGroup Users
 * @apiDescription Retrieve a single user by their ID.
 *
 * @apiParam {String} id User's unique identifier.
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
 * @api {put} /users/:id Update User
 * @apiVersion 1.0.0
 * @apiName UpdateUser
 * @apiGroup Users
 * @apiDescription Update a user's information.
 *
 * @apiParam {String} id User's unique identifier.
 *
 * @apiBody {String} [firstName] User's first name.
 * @apiBody {String} [lastName] User's last name.
 * @apiBody {String} [email] User's email address.
 * @apiBody {String} [phone] User's phone number.
 * @apiBody {String} [password] User's password.
 * @apiBody {Number} [age] User's age.
 * @apiBody {String} [address] User's address.
 * @apiBody {String} [city] User's city.
 * @apiBody {Number} [postalCode] User's postal code.
 *
 * @apiSuccess {Object} user The updated user object.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "firstName": "John",
 *       "lastName": "Doe Updated",
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
 * @api {delete} /users/:id Delete User
 * @apiVersion 1.0.0
 * @apiName DeleteUser
 * @apiGroup Users
 * @apiDescription Delete a user by their ID.
 *
 * @apiParam {String} id User's unique identifier.
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


router.put('/register', userController.register);
module.exports = router;
