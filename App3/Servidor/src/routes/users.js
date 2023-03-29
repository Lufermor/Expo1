//Este archivo contiene las rutas que tendremos en cuenta para las operaciones con usuarios.
import {Router} from 'express';
import {deleteUser, getUser, getUserCount, getUsers, saveUser, updateUsers} from '../controllers/users';

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: users endpoint
 */

/**
 * @swagger
 * /users:
 *  get:
 *    summary: Obtiene todos los usuarios
 *    tags: [Users]
 */
router.get('/users', getUsers);


/**
 * @swagger
 * /users/count:
 *  get:
 *    summary: Obtiene el total de usuarios
 *    tags: [Users]
 */
router.get('/users/count', getUserCount);

/**
 * @swagger
 * /users/{id}:
 *  get:
 *    summary: Obtiene una usuario 
 *    tags: [Users]
 */
router.get('/users/:id', getUser);

/**
 * @swagger
 * /users:
 *  post:
 *    summary: Guarda una nueva usuario
 *    tags: [Users]
 */
router.post('/users', saveUser);

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *    summary: Borra una usuario de la que se pasa su id
 *    tags: [Users]
 */
router.delete('/users/:id', deleteUser);

/**
 * @swagger
 * /users/{id}:
 *  put:
 *    summary: Modifica una usuario
 *    tags: [Users]
 */
router.put('/users/:id', updateUsers);

export default router;