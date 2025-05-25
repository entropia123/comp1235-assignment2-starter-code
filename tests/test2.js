import { expect } from "chai";

// NOTE: student solution filename is solution.js
// They will have to jump between many hoops if we want them to use their student id as filename
import { _surplus } from "../student_id-problems.js";

describe("_surplus(str)", () => {
    it("returns a function that returns the original string", () => {
        expect(_surplus("orange")("inner")).to.equal("orange");
        expect(_surplus("pear")("inner")).to.equal("pear");
        expect(_surplus("")("inner")).to.equal("");
    });
});
