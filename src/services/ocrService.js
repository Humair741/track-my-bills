import Tesseract from "tesseract.js";

export async function extractTextFromImage(file, onProgress = () => {}) {
  return new Promise((resolve, reject) => {
    Tesseract.recognize(file, "eng", {
      logger: onProgress,
    })
      .then(({ data: { text } }) => resolve(text))
      .catch(reject);
  });
}
