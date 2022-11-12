
module.exports = (identifier) => {
    if (identifier === null) {
        return null;
    }

    let idType = identifier.slice(0, 3);
    return Number.parseInt(identifier.slice(4), 10);
};