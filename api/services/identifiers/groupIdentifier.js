
module.exports = (id) => {
    var baseString = 'PWRG000000000000';
    const stringId = id.toString(10);

    return baseString.slice(0, -1 * stringId.length) + stringId;
};