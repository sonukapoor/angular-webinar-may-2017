export function thingsToDoReducer(state = [], action) {

    switch(action.type) {
        case 'ADD_THING_TO_DO':
            return state.concat([ action.payload.thingToDo ])
        default:
            return state;
    }
}