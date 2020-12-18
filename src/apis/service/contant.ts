import {initialize} from './db';

export const DB_NAME = 'test';
export enum Collections{ user = 'user' }

export async function user_collection(){
  const collection = await initialize(DB_NAME,Collections.user);
  return collection;
}