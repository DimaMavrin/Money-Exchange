module.exports = function makeExchange(currency) {
    let h = 0, q = 0, d = 0, n = 0, p = 0;
    if (currency > 10000) return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    if (currency <= 0) return {};
    else {
        while (currency >= 50) {
            currency = currency - 50;
            h++;
        }
        while (currency >= 25 && currency < 50) {
            currency = currency - 25;
            q++;
        }
        while (currency >= 10 && currency < 25) {
            currency = currency - 10;
            d++;
        }
        while (currency >= 5 && currency < 10) {
            currency = currency - 5;
            n++;
        }
        while (currency >= 1 && currency < 5) {
            currency = currency - 1;
            p++;
        }
    }
    let obj = { H: h, Q: q, D: d, N: n, P: p };
    if (h === 0) delete obj.H;
    if (q === 0) delete obj.Q;
    if (d === 0) delete obj.D;
    if (n === 0) delete obj.N;
    if (p === 0) delete obj.P;
    return obj;
}