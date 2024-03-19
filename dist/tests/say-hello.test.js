import { sayHello } from "../src/say-hello";
describe("sayHello", function () {
    it("should retrurn hello Lukman", function () {
        expect(sayHello("Lukman")).toBe("Hello Lukman");
    });
});
