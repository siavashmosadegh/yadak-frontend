const isAvailable = (data) => {
    if (Array.isArray(data)) {
        return data.length > 0;
    }
    if (typeof data === 'object' && data !== null) {
        return Object.keys(data).length > 0;
    }
    return data !== null && data !== undefined;
};

export default isAvailable;