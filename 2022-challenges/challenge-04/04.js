function fitsInOneBox(boxes) {
  const boxesOrdered = boxes.sort(
    (a, b) => a.l + a.w + a.h - (b.l + b.w + b.h)
  );

  for (let index = 0; index < boxesOrdered.length; index++) {
    if (
      index + 1 !== boxesOrdered.length &&
      (boxesOrdered[index].l >= boxesOrdered[index + 1].l ||
        boxesOrdered[index].w >= boxesOrdered[index + 1].w ||
        boxesOrdered[index].h >= boxesOrdered[index + 1].h)
    ) {
      return false;
    }
  }

  return true;
}

// console.log(
//   fitsInOneBox([
//     { l: 1, w: 1, h: 1 },
//     { l: 2, w: 2, h: 2 },
//   ])
// );

// console.log(
//   fitsInOneBox([
//     { l: 1, w: 1, h: 1 },
//     { l: 3, w: 3, h: 3 },
//     { l: 2, w: 2, h: 2 },
//   ])
// );

// console.log(
//   fitsInOneBox([
//     { l: 1, w: 1, h: 1 },
//     { l: 2, w: 2, h: 2 },
//     { l: 3, w: 1, h: 3 },
//   ])
// );

console.log(
  fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 2, w: 10, h: 2 },
  ])
);
