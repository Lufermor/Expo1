//Este archivo contiene las rutas que tendremos en cuenta para las operaciones con tareas.
import {Router} from 'express';
import {deleteTask, getTask, getTaskCount, getTasks, saveTask, updateTasks} from '../controllers/tasks';

const router = Router();

router.get('/tasks', getTasks);

router.get('/tasks/count', getTaskCount);

router.get('/tasks/:id', getTask);

router.post('/tasks', saveTask);

router.delete('/tasks/:id', deleteTask);

router.put('/tasks/:id', updateTasks);

export default router;