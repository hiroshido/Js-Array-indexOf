if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement) {
        if (this == null) {
            throw new TypeError();
        }
        var n=0, k, t = Object(this),
            len = t.length >>> 0;

        if (len === 0) return -1;
        
        if (arguments.length > 1) {
            n = Number(arguments[1]);
            if (n != n) n = 0;
            else if (n != 0 && n != Infinity && n != -Infinity) n = (n > 0 || -1) * Math.floor(Math.abs(n));
        }
        
        if (n >= len) return -1;
        
        for (k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); k < len; k++) {
            if (k in t && t[k] === searchElement) return k;
        }
        
        return -1;
    };
}
