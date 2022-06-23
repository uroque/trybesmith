import { ResultSetHeader } from 'mysql2';
import { INewUser } from '../interfaces';
import connection from './connection';

const create = async (newUser: INewUser): Promise<void> => {
  const query = `INSERT INTO Trybesmith.Users (
    username, classe, level, password) VALUES (?, ? ,?, ?);`;

  const { username, classe, level, password } = newUser;

  await connection.execute<ResultSetHeader>(query, [username, classe, level, password]);
};

export = {
  create,
};
