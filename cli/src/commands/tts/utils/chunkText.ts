export function chunkText(text: string, chunkSize: number): string[] {
  const chunks: string[] = [];

  const paragraphs = text.split("\n\n");

  let currentChunk = "";
  for (const paragraph of paragraphs) {
    if ((currentChunk + paragraph).length >= chunkSize) {
      chunks.push(currentChunk);
      currentChunk = "";

      if (paragraph.length >= chunkSize) {
        // Split the paragraph into words and add them to the chunks
        const words = paragraph.split(" ");

        for (const word of words) {
          if ((currentChunk + word).length < chunkSize) {
            currentChunk += (currentChunk ? " " : "") + word;
          } else {
            chunks.push(currentChunk);
            currentChunk = word;
          }
        }
      } else {
        // The paragraph fits the chunk size. Add it to the chunks.
        currentChunk = paragraph;
      }
    } else {
      // Add the paragraph to the current chunk if it fits
      // the chunk size. Otherwise, start a new chunk.
      currentChunk += (currentChunk ? "\n\n" : "") + paragraph;
    }
  }
  chunks.push(currentChunk);

  // Filter out empty chunks
  const filteredChunks = chunks.filter((chunk) => chunk !== "");

  return filteredChunks;
}
