/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sLoc = 0;
    let tLoc = 0;

    while (sLoc < s.length && tLoc < t.length) {
        if (s.charAt(sLoc) === t.charAt(tLoc)) {
            sLoc++;
        }
        tLoc++;
    }

    return sLoc === s.length;

};