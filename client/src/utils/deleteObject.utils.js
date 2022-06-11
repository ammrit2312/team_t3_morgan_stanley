export const deleteObject = (list, objectID) => {
    const index = list.findIndex(item => item.id === objectID);
    if (index !== -1) {
        list.splice(index, 1);
    }
}