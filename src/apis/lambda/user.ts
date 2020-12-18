import { useContext } from '@midwayjs/hooks';
import { useResponsive } from 'ahooks';
import { async } from 'validate.js';
import { ServiceResposne } from '../service/type';
import { login, register } from '../service/user';
import { LoginDto, RegisterDto } from '../service/user/type';

export type LoginApiResponseBody = {
  is_success: boolean;
  email?: string;
  reason?: string;
  token?: string;
}
export async function loginApi(param: LoginDto): Promise<ServiceResposne<LoginApiResponseBody>> {
  const ctx = useContext();
  console.log(ctx.response.set('set-cookie','token=111111111'));
  ctx.response.status = 401;
  try {
    const res = await login(param);
    if (res) {
      return {
        status: 200,
        body: {
          is_success: true,
          email: res.email,
          token: 'a90s8du0j1u012',
        },
      }
    } else {
      return {
        status: 401,
        body: {
          is_success: false,
          reason: 'user_not_exist',
        }
      }
    }
  } catch (err) {
    return {
      status: 500,
      error_msg: err.message,
    }
  }
}

export async function registerApi(param: RegisterDto): Promise<ServiceResposne<string>> {
  const ctx = useContext();
  console.log(ctx.cookies)
  try {
    const res = await register(param);
    return {
      status: 200,
      body: res,
    }
  } catch (error) {
    return {
      status: 400,
      error_msg: error.message,
    }
  }
}