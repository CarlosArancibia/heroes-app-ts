import { ReactNode, useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';

interface Props {
  children: ReactNode;
}

const init = () => {
  const user = JSON.parse(localStorage.getItem('user') ?? '{}');
  return {
    logged: !!user.name,
    user,
  };
};

export const AuthProvider = ({ children }: Props) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (username: string) => {
    const user = { id: Date.now(), name: username };

    localStorage.setItem('user', JSON.stringify(user));

    dispatch({
      type: types.login,
      payload: user,
    });
  };

  const logout = () => {
    localStorage.removeItem('user');

    dispatch({
      type: types.logout,
    });
  };

  return <AuthContext.Provider value={{ ...authState, login, logout }}>{children}</AuthContext.Provider>;
};
