import { apis } from "service";

export const getUsers = (payload) =>
  apis.get(
    `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${payload?.path?.id}=[]`,
    payload
  );
