
const OneDimensionalArrayToTwoDimensionalArray = (items, itemsPerColumn) => {
    const result = [];
    for (let i=0; i< items.length; i++) {
        const columnIndex = Math.floor(i / itemsPerColumn);
        if (!result[columnIndex]) {
            result[columnIndex] = []; // initialize column
        }
        result[columnIndex].push(items[i]) // add items to the column
    }
    return result.reverse(); // Reverse the columns for right-to-left filling
}

export default OneDimensionalArrayToTwoDimensionalArray;