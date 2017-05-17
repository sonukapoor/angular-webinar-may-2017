import { thingsToDoReducer } from './reducers/things-to-do';
import { routerReducer, RouterState } from '@ngrx/router-store';

export const appStore = {
    thingsToDo: thingsToDoReducer,
    router: routerReducer,
}

export interface AppStore {
    thingsToDo: string[];
    router: RouterState;
}