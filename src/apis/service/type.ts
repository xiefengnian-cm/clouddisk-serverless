interface BaseResponse {
  status: number;
}

interface SuccessResponse<T> extends BaseResponse {
  body?: T;
}

interface ErrorResponse extends BaseResponse {
  error_msg?: string;
}

export type ServiceResposne<T = any> = SuccessResponse<T> & ErrorResponse;
