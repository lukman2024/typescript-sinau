import { Seller } from "../src/seller";
import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";
describe("Interface", function () {
  it("should support in typescript", function () {
    const seller: Seller = {
      id: 1,
      name: "Toko ABC",
      nib: "123123123",
      npwp: "231232131",
    };

    seller.name = "Toko ABC Baru";

    console.info(seller);
  });

  it("should support function interface", function () {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 2)).toBe(4);
  });

  it("should support indexble interface", function () {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Lukman", "Hakim", "Abdul"];
    console.info(names);
  });

  it("should support indexble interface for non number index", function () {
    interface StringDictionary {
      [key: string]: string;
    }
    const dictionary: StringDictionary = {
      name: "Lukman",
      address: "Hakim",
    };
    expect(dictionary["name"]).toBe("Lukman");
    expect(dictionary["address"]).toBe("Hakim");
  });
  it("should support extends interface", function () {
    const employee: Employee = {
      id: "1",
      name: "Lukman Hakim",
      division: "IT",
    };

    console.info(employee);

    const manager: Manager = {
      id: "2",
      name: "Lukman Hakim",
      division: "IT",
      numberOfEmployee: 10,
    };

    console.info(manager);
  });

  it("should support function in interface", function () {
    const person: Person = {
      name: "Lukman",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello("Hakim"));
  });

  it("should support interface type", function () {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: string;
    }

    type Domain = HasName & HasId;

    const domain: Domain = {
      name: "Lukman",
      id: "1",
    };

    console.info(domain);
  });

  it("should support type assertions", function () {
    const person: any = {
      name: "Lukman",
      age: 30,
    };

    const person2: Person = person as Person;
    // person2.age

    console.info(person2);
  });
});
