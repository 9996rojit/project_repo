import { NextFunction, Request, Response } from 'express';
import User from '@/db/models/user'

import validator from '@/helper/validator/user.validation'
import {
  loginLogic,
  registerLogic,
  getAllUser,
  getSingleUserById
} from '@/service/admin/authService'
import Type from '@/db/models/type';

const Login = async (req: Request, res: Response) => {
  const { contactNumber, password } = req.body
  const data = await loginLogic(User, { contactNumber, password })

  res.send(data)
};

const AddUser = async (req: Request, res: Response, next: NextFunction) => {
  const userData = req.body;
  const validateData = await validator.userSchema.validate(userData)
  console.log("🤫🤫🤫 ~ file: index.ts:23 ~ AddUser ~ validateData:", validateData)
  const data = await registerLogic(User, userData)
  res.send(data)

};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const userData = await getAllUser(User)
  res.send(userData)

};
const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const singleUser = await getSingleUserById(User, Type, id)

  res.send(singleUser)

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
