describe("Type Alias", function () {
    it("should support in typescript", function () {
        const category = {
            id: "1",
            name: "handphone",
        };
        const product = {
            id: "1",
            name: "samsung",
            price: 100000,
            category: category,
        };
        console.info(category);
        console.info(product);
    });
});
export {};
