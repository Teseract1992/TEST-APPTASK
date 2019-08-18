import { Request, Response } from 'express';

class UploadController {

    public async create(req: Request, res: Response): Promise<void> {
     const file = req.body.photo;
     const result = await file.mv('./uploads/' + file.name)
                    {
                       res.json({
                                success: true,
                                message: "File uploaded!"
                        });
                    }
  }

}
const uploadController = new UploadController;
export default uploadController;