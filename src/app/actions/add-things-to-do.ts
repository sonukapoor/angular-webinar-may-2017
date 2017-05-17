export const addThingToDo = (item: string) => {
    return {
        type: 'ADD_THING_TO_DO',
        payload: {
            thingToDo: item,
        },
    }
}