export type TUserRole = {
  id: number;
  role: string;
};

export type TUser = {
  id: string;
  name: string;
  email: string;
  user_role_id: number;
};
