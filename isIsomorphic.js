/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sMap = new Map();
    const tMap = new Map();

    for (let i = 0; i < s.length; i++) {
        const sLetter = s[i];
        const tLetter = t[i];

        if (!sMap.has(sLetter) && !tMap.has(tLetter)) {
            sMap.set(sLetter, tLetter);
            tMap.set(tLetter, sLetter);
        } else if (sMap.get(sLetter) !== tLetter || tMap.get(tLetter) !== sLetter) {
            return false;
        }
    }

    return true;

};