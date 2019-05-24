const assert = require("assert");
const niceTicks = require("../dist/nice-ticks.js");

describe("nice ticks", function () {

    it("nice int", function () {

        assert.equal(niceTicks(0.81, 12.3).join(", "), "0, 5, 10, 15");

        assert.equal(niceTicks(5, 96, 5).join(", "), "0, 20, 40, 60, 80, 100");

        assert.equal(niceTicks(5, 96, 4).join(", "), "0, 50, 100");

        assert.equal(niceTicks(5, 96, 3).join(", "), "0, 50, 100");

        assert.equal(niceTicks(1, 91, 2).join(", "), "0, 100");

        assert.equal(niceTicks(3.33, 12.66).join(", "), "0, 5, 10, 15");

    });

    it("nice float", function () {

        assert.equal(niceTicks(105.60, 543.80, 5).join(", "), "100, 200, 300, 400, 500, 600");

        assert.equal(niceTicks(0.60, 3.80, 5).join(", "), "0, 1, 2, 3, 4");

        assert.equal(niceTicks(0.10, 0.23, 5).join(", "), "0.1, 0.15, 0.2, 0.25");

        assert.equal(niceTicks(2.03, 2.17, 5).join(", "), "2, 2.05, 2.1, 2.15, 2.2");

    });

    it("nice negative", function () {

        assert.equal(niceTicks(-0.60, -0.45).join(", "), "-0.6, -0.55, -0.5, -0.45");

        assert.equal(niceTicks(-88.60, 3.80, 5).join(", "), "-100, -80, -60, -40, -20, 0, 20");

        assert.equal(niceTicks(-23456.60, 64223.80, 5).join(", "), "-40000, -20000, 0, 20000, 40000, 60000, 80000");

    });

    it("nice equal or invert", function () {

        assert.equal(niceTicks(1, 1, 5).join(", "), "1, 1.2, 1.4, 1.6, 1.8, 2");

        assert.equal(niceTicks(2, 1, 5).join(", "), "1, 1.2, 1.4, 1.6, 1.8, 2");

    });

    it("nice NaN", function () {

        assert.equal(niceTicks("1", "20", 5).join(", "), "0, 5, 10, 15, 20");

        assert.equal(niceTicks("2", NaN, 5).join(", "), "0, 0.5, 1, 1.5, 2");

    });

});