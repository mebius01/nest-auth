import { TUser, TAuthLocal, TAuthSessions, TUserRole } from "./types";
import { auth_local, auth_sessions, users, users_role } from "./mock-data";

interface IMapper<T> {
  table: T[];
  insert<I extends T, O>(payload: I): O;
  get<P, O>(param: P): O;
  list(): T[];
  update<P, O>(param: P, payload: O): O;
  delete<P, O>(param: P): O;
  count(): number;
}

class MapperFileDb<T> implements IMapper<T> {
  constructor(table: T[]) {}
  table: T[];
  insert<I extends T, O>(payload: I): O {
    try {
      this.table.push(payload);
      const data = Object(this.table[this.table.length - 1]);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  get<P, O>(param: P): O {
    try {
      let result: any;
      const key = Object.entries(param)[0][0];
      const value = Object.entries(param)[0][1];
      this.table.forEach((iterator) => {
        if (Object.prototype.hasOwnProperty.call(iterator, key))
          if (iterator[key] === value) result = iterator;
      });
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  list(): T[] {
    return this.table;
  }

  update<P, O>(param: P, payload: O): O {
    try {
      const original = Object(this.get(param));
      for (const key in original) {
        if (Object.prototype.hasOwnProperty.call(original, key)) {
          for (const key in payload) {
            if (Object.prototype.hasOwnProperty.call(payload, key)) {
              if (payload[key] !== original[key]) {
                original[key] = payload[key];
              }
            }
          }
        }
      }
      return Object(this.get(param));
    } catch (error) {
      throw new Error(error);
    }
  }

  delete<P, O>(param: P): O {
    try {
      const original = Object(this.get(param));
      const isLargeNumber = (el) => el.id === original.id;
      const index = this.table.findIndex(isLargeNumber);
      const data = Object(this.table[index]);
      this.table.splice(index, 1);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  count(): number {
    try {
      return Number(this.table.length);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export class UsersRoleMapper extends MapperFileDb<TUserRole> {
  constructor(table: TUserRole[]) {
    super(table);
    this.table = users_role;
  }
}

export class UsersMapper extends MapperFileDb<TUser> {
  constructor(table: TUser[]) {
    super(table);
    this.table = users;
  }
}

export class AuthLocalMapper extends MapperFileDb<TAuthLocal> {
  constructor(table: TAuthLocal[]) {
    super(table);
    this.table = auth_local;
  }
}

export class AuthSessionsMapper extends MapperFileDb<TAuthSessions> {
  constructor(table: TAuthSessions[]) {
    super(table);
    this.table = auth_sessions;
  }
}
