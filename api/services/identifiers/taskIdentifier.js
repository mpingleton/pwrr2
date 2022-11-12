
module.exports = (id) => {
    if (id === null) {
        return null;
    }

    var baseString = 'PWRT000000000000';
    const stringId = id.toString(10);

    return baseString.slice(0, -1 * stringId.length) + stringId;
};