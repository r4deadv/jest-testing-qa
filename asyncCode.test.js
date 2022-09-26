const getKittenById = require("./asyncCode");

describe("getKittenById works", () => {
  it("will return the kitten if the id is found", async () => {
    const kittenId = 4;
    const kitten = await getKittenById(kittenId);

    expect(kitten.id).toEqual(4);
    expect(kitten.name).toEqual("Genghis Cat");
    expect(kitten.age).toEqual(8);
  });

  it("will return an error if the id is not found", async () => {
    const notAnId = 7;
    await expect(getKittenById(notAnId)).rejects.toEqual(
      `Kitten with ID ${notAnId} not found.`
    );
  });
});
