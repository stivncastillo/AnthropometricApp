import {createContext} from 'react';
import {INavigation} from '../../types/app';

const navigationContext: React.Context<INavigation> = createContext({});

export default navigationContext;
