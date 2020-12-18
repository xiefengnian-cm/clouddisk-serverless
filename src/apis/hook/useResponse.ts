import { useContext } from '@midwayjs/hooks';
import { ServiceResposne } from '../service/type';
import cookie from 'cookie';
export function useResponse<T>(res: ServiceResposne<T>) {
  const { response } = useContext();
  response.status = res.status;
  return {

  }
}

export function useSession() {
  const { request } = useContext();
  const { token } = cookie.parse(request.headers['Cookie']);
  
}