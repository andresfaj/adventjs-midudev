export default function daysToXmas(date) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const dateBase = new Date("Dec 25, 2021");
  const utcDateBase = Date.UTC(
    dateBase.getFullYear(),
    dateBase.getMonth(),
    dateBase.getDate()
  );
  const utcDateInput = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  const res = Math.floor((utcDateBase - utcDateInput) / _MS_PER_DAY);

  return res === 25 ? 0 : res;
}
