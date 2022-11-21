import { createContext } from 'react';

const initialState = {
  firstName: '',
  lastName: '',
};

export type UserState = typeof initialState;

const context = createContext<UserState>(initialState);

export default context;
