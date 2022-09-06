export default function contains(almacen, objectToFind) {
  const arrayValues = Object.values(almacen);
  let almacenAux = {};

  for (let index = 0; index < arrayValues.length; index++) {
    let element = arrayValues[index];
    if (element === "vacio") continue;
    if (element === objectToFind) return true;

    if (typeof element === "object") {
      almacenAux = { ...almacenAux, ...element };
    }
  }

  if (!Object.values(almacenAux).length) {
    return false;
  } else {
    return contains(almacenAux, objectToFind);
  }
}
