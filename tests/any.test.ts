describe("any", function () {
  it("should support in typescript", function () {
    const person: any = {
      id: 1,
      name: "Lukman Hakim",
      age: 30,
    };

    person.age = 31;
    person.address = "indonesia";

    console.info(person);
  });
});
