import { Request, Response } from 'express'
import category from '@/db/models/category';
import { CreateCategory, getAllCategory } from '@/service/admin/categoryService';
import { getFileName } from '@/helper/imageUploader';

const createCategory = async (req: Request, res: Response) => {
    const categoryData = req.body;
    const filePath = req?.file?.path
    const data = await CreateCategory(category, { ...categoryData, category_image: getFileName(filePath as string) });

    res.send(data)

}

const getCategory = async (req: Request, res: Response) => {
    const data = await getAllCategory(category)
    res.send(data)

}

export default {
    createCategory,
    getCategory
}