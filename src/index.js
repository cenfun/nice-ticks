function toStr(str) {
    return "" + str;
};

// return float part length
function fLen(n) {
    var s = toStr(n);
    var a = s.split(".");
    if (a.length > 1) {
        return a[1].length;
    }
    return 0;
};
// return float as int
function fInt(n) {
    var s = toStr(n);
    return parseInt(s.replace(".", ""));
};

function add(n1, n2) {
    var r1 = fLen(n1);
    var r2 = fLen(n2);
    if (r1 + r2 == 0) {
        return n1 + n2;
    } else {
        var m = Math.pow(10, Math.max(r1, r2));
        return (Math.round(n1 * m) + Math.round(n2 * m)) / m;
    }
};

function mul(n1, n2) {
    var r1 = fLen(n1);
    var r2 = fLen(n2);
    if (r1 + r2 == 0) {
        return n1 * n2;
    } else {
        var m1 = fInt(n1);
        var m2 = fInt(n2);
        return (m1 * m2) / Math.pow(10, r1 + r2);
    }
};

function nice(x, round) {
    var exp = Math.floor(Math.log(x) / Math.log(10));
    var f = x / Math.pow(10, exp);
    var nf;
    if (round) {
        if (f < 1.5) {
            nf = 1;
        } else if (f < 3) {
            nf = 2;
        } else if (f < 7) {
            nf = 5;
        } else {
            nf = 10;
        }
    } else {
        if (f <= 1) {
            nf = 1;
        } else if (f <= 2) {
            nf = 2;
        } else if (f <= 5) {
            nf = 5;
        } else {
            nf = 10;
        }
    }
    return nf * Math.pow(10, exp);
}


//https://wiki.tcl-lang.org/page/Chart+generation+support

const niceNumber = function (min, max, num = 4) {
    if (min == max) {
        max = min + 1;
    } else if (min > max) {
        var n = min;
        min = max;
        max = n;
    }
    var r = nice(max - min, false);
    var d = nice(r / (num - 1), true);
    var s = mul(Math.floor(min / d), d);
    var e = mul(Math.ceil(max / d), d);
    var arr = [];
    var v = s;
    while (v <= e) {
        arr.push(v);
        v = add(v, d);
    }
    return arr;
};

module.exports = niceNumber;