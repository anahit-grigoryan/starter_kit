import {expect} from 'chai';
import jsdom from 'jsdom';
const {JSDOM} = jsdom;
import fs from 'fs';

describe("Is equal", () => {
    it("Boolean", () => {
        expect(true).to.equal(true);
    });
    it("Number", () => {
        expect(1).to.equal(1);
    });
    it("String", () => {
        expect("Test").to.equal("Test");
    });
});

describe("index.html", () => {
    it("should say hello",() => {
        const index = fs.readFileSync(__dirname + "/../client/index.html","utf-8");
        jsdom.env(index,function(err,window){
            if(err) throw err;
            const h1 = window.document.getElementsByTagName("h1")[0];
            expect(h1.innerHTML).to.equal("Hello worldd");
            window.close();
        });
    });
});