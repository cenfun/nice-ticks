function toStr(str) {
    return `${str}`;
}

// return float part length
function fLen(n) {
    const s = toStr(n);
    const a = s.split('.');
    if (a.length > 1) {
        return a[1].length;
    }
    return 0;
}

// return float as int
function fInt(n) {
    const s = toStr(n);
    return parseInt(s.replace('.', ''));
}

function add(n1, n2) {
    const r1 = fLen(n1);
    const r2 = fLen(n2);
    if (r1 + r2 === 0) {
        return n1 + n2;
    }
    const m = Math.pow(10, Math.max(r1, r2));
    return (Math.round(n1 * m) + Math.round(n2 * m)) / m;
    
}

function mul(n1, n2) {
    const r1 = fLen(n1);
    const r2 = fLen(n2);
    if (r1 + r2 === 0) {
        return n1 * n2;
    }
    const m1 = fInt(n1);
    const m2 = fInt(n2);
    return (m1 * m2) / Math.pow(10, r1 + r2);
    
}

function nice(x, round) {
    const exp = Math.floor(Math.log(x) / Math.log(10));
    const f = x / Math.pow(10, exp);
    let nf;
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

const toNum = function(num) {
    if (typeof (num) !== 'number') {
        num = parseFloat(num);
    }
    if (isNaN(num)) {
        num = 0;
    }
    return num;
};


//https://wiki.tcl-lang.org/page/Chart+generation+support

export default function niceTicks(min, max, num = 4) {
    min = toNum(min);
    max = toNum(max);
    num = toNum(num);

    if (min === max) {
        max = min + 1;
    } else if (min > max) {
        const n = min;
        min = max;
        max = n;
    }

    const r = nice(max - min, false);
    const d = nice(r / (num - 1), true);
    const s = mul(Math.floor(min / d), d);
    const e = mul(Math.ceil(max / d), d);
    const arr = [];
    let v = s;
    while (v <= e) {
        arr.push(v);
        v = add(v, d);
    }
    return arr;
}
