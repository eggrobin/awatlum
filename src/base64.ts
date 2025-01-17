// convert a Unicode string to a string in which
// each 16-bit unit occupies only one byte
function toBinary(string: string) {
  const codeUnits = new Uint16Array(string.length);
  for (let i = 0; i < codeUnits.length; i++) {
    codeUnits[i] = string.charCodeAt(i);
  }
  const charCodes = new Uint8Array(codeUnits.buffer);
  let result = '';
  for (let i = 0; i < charCodes.byteLength; i++) {
    result += String.fromCharCode(charCodes[i]);
  }
  return result;
}
function fromBinary(binary: string) {
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  const charCodes = new Uint16Array(bytes.buffer);
  let result = '';
  for (let i = 0; i < charCodes.length; i++) {
    result += String.fromCharCode(charCodes[i]);
  }
  return result;
}
export function encode(text: string): string {
  return window
    .btoa(toBinary(text))
    .replace(/\//g, "_")
    .replace(/\+/g, "-")
    .replace(/=*$/, "");
}

export function decode(text: string): string {
  return fromBinary(window.atob(text.replace(/_/g, "/").replace(/-/g, "+")));
}
