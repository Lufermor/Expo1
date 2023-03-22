//Este archivo contiene las rutas que tendremos en cuenta para las operaciones con tareas.
import {Router} from 'express';
import {deleteTask, getTask, getTaskCount, getTasks, saveTask, updateTasks} from '../controllers/tasks';

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Obtiene todas las tareas
 *    tags: [Tasks]
 */
router.get('/tasks', getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: Obtiene el total de tareas
 *    tags: [Tasks]
 */
router.get('/tasks/count', getTaskCount);

/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *    summary: Obtiene una tarea 
 *    tags: [Tasks]
 */
router.get('/tasks/:id', getTask);

/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: Guarda una nueva tarea
 *    tags: [Tasks]
 */
router.post('/tasks', saveTask);

/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *    summary: Borra una tarea de la que se pasa su id
 *    tags: [Tasks]
 */
router.delete('/tasks/:id', deleteTask);

/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *    summary: Modifica una tarea
 *    tags: [Tasks]
 */
router.put('/tasks/:id', updateTasks);

export default router;