function isHex(str) {
    if (typeof str !== "string" &&
        !(str instanceof String))
        return false;

    if (str[0] !== "#") return false;
    str = str.split("#")[1];
    switch (str.length) {
        case 6:
            return Boolean(str.match(/^[a-f0-9]{6}$/i));
        case 3:
            return Boolean(str.match(/^[a-f0-9]{3}$/i));
        default:
            return false;
    }
}