function countHours(year, holidays) {
  let extraHours = 0;

  holidays.forEach((holiday) => {
    const currentDate = new Date(`${year}/${holiday}`);
    currentDate.getDay() !== 0 && currentDate.getDay() !== 6 && extraHours++;
  });

  return extraHours * 2;
}

console.log(countHours(2022, ["01/06", "04/01", "12/25"]));
