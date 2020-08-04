import {createContext} from 'react';
import {IWeight} from '../../types/app';

const weightContext: React.Context<IWeight> = createContext({});

export default weightContext;
