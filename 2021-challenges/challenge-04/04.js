export default function createXmasTree(height) {
  let tree = "";

  for (let index = height; index >= 1; index--) {
    const numberAteriscos = height + height - 1 - (index - 1) * 2;
    tree += `${"_".repeat(index - 1)}${"*".repeat(numberAteriscos)}${"_".repeat(
      index - 1
    )}\n`;
    if (index === 1) {
      tree += `${"_".repeat(height - 1)}#${"_".repeat(height - 1)}\n`;
      tree += `${"_".repeat(height - 1)}#${"_".repeat(height - 1)}`;
    }
  }

  return tree;
}
