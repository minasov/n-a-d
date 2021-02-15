const reverse = str => {
    return (str == null) ? '' : str.split('').reverse().join('');
}

module.exports = reverse;
export default reverse;