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

export type TAuthLocal = {
  id?: number;
  password_hash: string;
  user_id: string;
};

export type TAuthSessions = {
  id: number;
  user_id: string;
  session: string;
};
