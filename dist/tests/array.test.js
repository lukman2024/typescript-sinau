"use strict";
describe("Array", function () {
    it("should same with javascript", function () {
        const names = ["Lukman", "Hakim"];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });
    it("shoul support readonly array", function () {
        const hobbies = ["Membaca", "Menulis"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
        // hobbies[0] = "Coding";
    });
    it("should support tuple", function () {
        const person = ["Lukman", "Hakim", 30];
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
        // person[0] = "Hakim";
    });
});
