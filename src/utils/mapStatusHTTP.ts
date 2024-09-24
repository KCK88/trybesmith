export const http: Record<string, number> = {
  SUCCESSFUL: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  UNPROCESSABLE: 422,
};
  
const mapStatusHTTP = (status: keyof typeof http): number => http[status] || 500;
  
export default mapStatusHTTP;