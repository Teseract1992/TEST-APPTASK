import { Request, Response } from 'express';


import pool from '../database';

class TasksController {

    public async list(req: Request, res: Response): Promise<void> {
        const tasks = await pool.query('SELECT * FROM tasks');
        res.json(tasks);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const tasks = await pool.query('SELECT * FROM tasks WHERE id = ?', [id]);
        console.log(tasks.length);
        if (tasks.length > 0) {
            return res.json(tasks[0]);
        }
        res.status(404).json({ text: "The task doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO tasks set ?', [req.body]);
        res.json({ message: 'Task Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldTask = req.body;
        await pool.query('UPDATE tasks set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The task was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM tasks WHERE id = ?', [id]);
        res.json({ message: "The task was deleted" });
    }
}

const tasksController = new TasksController;
export default tasksController;