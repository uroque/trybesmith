import newJWT from '../auth/generateToken';
import { INewUser } from '../interfaces';
import usersModel from '../models/usersModel';

const create = async (newUser: INewUser) => {
  const { username } = newUser;
  await usersModel.create(newUser);
  const token = newJWT(username);

  return { token };
};

export = {
  create,
};
