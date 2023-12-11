export function readFileContent(
  inputElement: HTMLInputElement,
  callback: (content: string | null) => void
): void {
  const file = inputElement.files?.[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (event) {
      if (event.target) {
        const result = event.target.result as string;
        callback(result);
      }
    };

    reader.readAsText(file);
  } else {
    callback(null);
  }
}
