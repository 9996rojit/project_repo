import { NextFunction, Request, Response } from 'express';
import User from '@/db/models/user'

import validator from '@/helper/validator/user.validation'
import { loginLogic } from '@/service/admin/authService'

const Login = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const data = await loginLogic(User, { email, password })
  console.log("🚀 ~ file: index.ts:10 ~ Login ~ data:", data);
};

const AddUser = async (req: Request, res: Response, next: NextFunction) => {

};

const getUser = async (req: Request, res: Response, next: NextFunction) => {

};
const getUserById = async (req: Request, res: Response, next: NextFunction) => {

};

const createUser = async (req: Request, res: Response, next: NextFunction) => {

};

const changeUserPassword = async (req: Request, res: Response, next: NextFunction) => {

};
export default {
  Login,
  AddUser,
  getUser,
  getUserById,
  createUser,
  changeUserPassword,
};
