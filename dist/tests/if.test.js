"use strict";
describe("If Statement", function () {
    it("should support in typescript", function () {
        const examValue = 90;
        if (examValue > 80) {
            console.info("Good");
        }
        else if (examValue > 60) {
            console.info("Not Bad");
        }
        else {
            console.info("Try Again");
        }
    });
    it("should support ternary operator ", function () {
        const value = 80;
        const say = value >= 75 ? "Congratulation" : "Try Again";
        console.info(say);
    });
    it("should support switch statement", function () {
        function sayHello(name) {
            switch (name) {
                case "Lukman":
                    return "Hello Lukman";
                case "Hakim":
                    return "Hello Hakim";
                default:
                    return "Hello World";
            }
        }
        console.info(sayHello("Lukman"));
        console.info(sayHello("Hakim"));
        console.info(sayHello("Hello World"));
    });
});
