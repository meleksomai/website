import { chunkText } from "../chunkText";

describe("chunkText", () => {
  it("should chunk simple text correctly", () => {
    const text = "This is a simple text for testing.";
    const chunkSize = 10;
    const result = chunkText(text, chunkSize);
    expect(result).toEqual(["This is a", "simple", "text for", "testing."]);
  });

  it("should chunk text with multiple paragraphs correctly", () => {
    const text =
      "This is the first paragraph.\n\nThis is the second paragraph.";
    const chunkSize = 20;
    const result = chunkText(text, chunkSize);
    expect(result).toEqual([
      "This is the first",
      "paragraph.",
      "This is the second",
      "paragraph.",
    ]);
  });

  it("should return the whole text if chunk size is larger than text length", () => {
    const text = "Short text.";
    const chunkSize = 50;
    const result = chunkText(text, chunkSize);
    expect(result).toEqual(["Short text."]);
  });

  it("should handle chunk size exactly the length of some words", () => {
    const text = "Exact length test.";
    const chunkSize = 5;
    const result = chunkText(text, chunkSize);
    expect(result).toEqual(["Exact", "length", "test."]);
  });

  it("should handle empty text", () => {
    const text = "";
    const chunkSize = 10;
    const result = chunkText(text, chunkSize);
    expect(result).toEqual([]);
  });
});
