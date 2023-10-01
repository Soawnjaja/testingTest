
function capitalize(str) {
    if(str.length === 0) {
        return '';
    }
    const [firstChar, ...restChars] = str;
    return `${firstChar.toUpperCase()}${restChars.join('')}`;
}
export  default capitalize; 