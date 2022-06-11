export const deleteObject = (list, objectID) => {
    for(let i = 0; i < list.length; i++) {
        if(list[i]._id === objectID) {
            list.splice(i, 1);
        }
    }
    console.log(list)
    return list;
}