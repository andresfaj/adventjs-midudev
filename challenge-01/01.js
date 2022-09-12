export default function contarOvejas(ovejas) {
    const onlyOvejasRojas = ovejas.filter((oveja) => oveja.color === "rojo" && /(na)/g.test(oveja.name.toLowerCase()));
    return onlyOvejasRojas
  }