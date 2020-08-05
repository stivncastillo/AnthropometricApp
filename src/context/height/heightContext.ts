import {createContext} from 'react';
import {IHeight} from '../../types/app';

const heightContext: React.Context<IHeight> = createContext({});

export default heightContext;
