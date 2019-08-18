import express, { Router } from 'express';

import uploadController from '../controllers/uploadController';

class UploadRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.post('/upload', uploadController.create);
    }

}

export default new UploadRoutes().router;

