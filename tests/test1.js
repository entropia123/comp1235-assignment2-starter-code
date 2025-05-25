import { expect } from "chai";

// NOTE: student solution filename is solution.js
// They will have to jump between many hoops if we want them to use their student id as filename
import { _findNumOfDigits } from "../solution.js";

describe("_findNumOfDigits(str)", () => {
    it("determines the number of digits in the source argument", () => {
        expect(_findNumOfDigits(1000)).to.equal(4);
        expect(_findNumOfDigits("abcd")).to.equal(0);
        expect(_findNumOfDigits(12)).to.equal(2);
        expect(_findNumOfDigits("COMP1235")).to.equal(4);
        expect(_findNumOfDigits("C1O2M3P5")).to.equal(4);
    });
});
