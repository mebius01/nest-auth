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
