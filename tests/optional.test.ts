describe("Optional Parameter", function () {
  it("should support null and undefined", function () {
    function sayHello(name?: String | null) {
      if (name) {
        console.info(`Hello ${name}`);
      } else {
        console.info("Hello World");
      }
    }

    sayHello("Lukman");
    const name: String | undefined = undefined;
    sayHello(name);
    sayHello(null);
  });
});
