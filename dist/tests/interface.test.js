describe("Interface", function () {
    it("should support in typescript", function () {
        const seller = {
            id: 1,
            name: "Toko ABC",
            nib: "123123123",
            npwp: "231232131",
        };
        seller.name = "Toko ABC Baru";
        console.info(seller);
    });
    it("should support function interface", function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    it("should support indexble interface", function () {
        const names = ["Lukman", "Hakim", "Abdul"];
        console.info(names);
    });
    it("should support indexble interface for non number index", function () {
        const dictionary = {
            name: "Lukman",
            address: "Hakim",
        };
        expect(dictionary["name"]).toBe("Lukman");
        expect(dictionary["address"]).toBe("Hakim");
    });
    it("should support extends interface", function () {
        const employee = {
            id: "1",
            name: "Lukman Hakim",
            division: "IT",
        };
        console.info(employee);
        const manager = {
            id: "2",
            name: "Lukman Hakim",
            division: "IT",
            numberOfEmployee: 10,
        };
        console.info(manager);
    });
    it("should support function in interface", function () {
        const person = {
            name: "Lukman",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            },
        };
        console.info(person.sayHello("Hakim"));
    });
});
export {};
