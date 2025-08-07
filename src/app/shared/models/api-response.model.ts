export interface ApiResponse<T> {
  status: string;
  code: number;
  message: string;
  timeStamp: string;
  data: T;
}
