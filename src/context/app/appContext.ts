import {createContext} from 'react';
import {IUserData} from '../../types/app';

const appContext: React.Context<IUserData> = createContext({});

export default appContext;
