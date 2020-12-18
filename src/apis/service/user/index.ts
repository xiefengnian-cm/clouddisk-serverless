import { user_collection } from '../contant';
import { LoginDto, RegisterDto } from './type';

export async function login(param:LoginDto):Promise<any>{
  try{
    const res = await(await user_collection()).findOne(param);
    return res;
  } catch(err){
    console.log(err);
  }
}

export async function register(param:RegisterDto):Promise<string>{
  try{
    const res = await (await user_collection()).insertOne(param);
    return 'success';
  } catch(err){
    return err.message;
  }
}