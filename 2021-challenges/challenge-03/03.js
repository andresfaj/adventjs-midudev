export default function isValid(letter) {
  const letterWitoutBlankSpaces = letter.replace(/\s+/g, "");
  const hasEmptyParentheses = letterWitoutBlankSpaces.includes("()");
  const regexParentheses = /\((\(\))*\)/g;

  if (!hasEmptyParentheses && !letter.includes("[") && !letter.includes("{")) {
    //Para identificar acententos, caracteres especiales
    const stringOnlyParentheses = letter
      .replace(/[\w\u00C0-\u017F]+/g, " ")
      .replace(/\s+/g, "");
    console.log({ stringOnlyParentheses });
    if (stringOnlyParentheses.length > 1) {
      return regexParentheses.test(stringOnlyParentheses);
    } else {
      return false;
    }
  } else {
    return false;
  }
}
