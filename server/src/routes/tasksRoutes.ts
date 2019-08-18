import express, { Router } from 'express';

import tasksController from '../controllers/tasksController';

class TaskRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', tasksController.list);
        this.router.get('/:id', tasksController.getOne);
        this.router.post('/', tasksController.create);
        this.router.put('/:id', tasksController.update);
        this.router.delete('/:id', tasksController.delete);
    }

}

export default new TaskRoutes().router;

