import { Seller } from "../src/seller";
describe("Interface", function () {
  it("should support in typescript", function () {
    const seller: Seller = {
      id: 1,
      name: "Toko ABC",
      nip: "123123123",
      npwp: "231232131",
    };

    seller.name = "Toko ABC";

    console.info(seller);
  });
});
