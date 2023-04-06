import { formatDate } from "./dateFormat";

describe("dateFormat", () => {
  it("should return a date in the format of 18 Feb 2012", () => {
    const date = "2017-04-27T10:34:39Z";
    const formattedDate = formatDate(date);

    expect(formattedDate).toBe(" 27 Apr 2017");
  });
});
