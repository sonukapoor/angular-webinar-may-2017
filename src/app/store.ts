import { thingsToDoReducer } from './reducers/things-to-do';

export const appStore = {
    thingsToDo: thingsToDoReducer,
}

export interface AppStore {
    thingsToDo: string[]
}