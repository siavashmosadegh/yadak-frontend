const isAvailableVersionTwo = (data, options = { checkArray: true, checkObject: true }) => {
    const { checkArray, checkObject } = options;

    if (Array.isArray(data)) {
        return checkArray ? data.length > 0 : true;
    }
    if (typeof data === 'object' && data !== null) {
        return checkObject ? Object.keys(data).length > 0 : true;
    }
    return data !== null && data !== undefined;
};

//How this improved version works:
//checkArray: true → default behavior: array must be non-empty.
//checkArray: false → ignore empty arrays, just check they exist.
//checkObject: true → default behavior: object must have keys.
//checkObject: false → ignore if object is empty, just check it exists.

//isAvailable([], { checkArray: true }); // false (empty array NOT valid)
//isAvailable([], { checkArray: false }); // true (empty array IS valid)

//isAvailable({}, { checkObject: true }); // false (empty object NOT valid)
//isAvailable({}, { checkObject: false }); // true (empty object IS valid)
