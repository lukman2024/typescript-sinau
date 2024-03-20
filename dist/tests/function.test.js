"use strict";
describe("Function", function () {
    it("should support in typescript", function () {
        function sayHello(name) {
            return `Hello ${name}`;
        }
        expect(sayHello("Lukman")).toBe("Hello Lukman");
        function printHello(name) {
            console.info(`Hello ${name}`);
        }
        printHello("Lukman");
    });
    it("should support default value", function () {
        function sayHello(name = "Lukman") {
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe("Hello Lukman");
        expect(sayHello("Hakim")).toBe("Hello Hakim");
    });
    it("should support rest parameter", function () {
        function sum(...values) {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
    it("should support optional parameter", function () {
        function sayHello(firstName, lastName) {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            }
            else {
                return `Hello ${firstName}`;
            }
        }
        expect(sayHello("Lukman")).toBe("Hello Lukman");
        expect(sayHello("Lukman", "Hakim")).toBe("Hello Lukman Hakim");
    });
    it("should support function overloading", function () {
        function callMe(value) {
            if (typeof value === "string") {
                return value.toUpperCase;
            }
            else if (typeof value === "number") {
                return value * 10;
            }
        }
        expect(callMe(10)).toBe(100);
        expect(callMe("Hakim")).toBe("HAKIM");
    });
});
