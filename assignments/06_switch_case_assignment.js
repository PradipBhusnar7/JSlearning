function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 2:
      console.log(` ${monthNumber} -January`);
      break;
    case 5:
      console.log(` ${monthNumber} -May `);
      break;
    case 12:
      console.log(` ${monthNumber} -December`);
      break;
    default:
      console.log(`Invalid data: ${monthNumber}`);
      break;
  }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
