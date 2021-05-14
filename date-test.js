
const a = "30 05 1988, 28 02 2000";
const b = "30/05/1988, 28/02/2000";
const c = "123456789";
const d = "asdfghjklzxcv123456789";
const e = "30 05 1995, 30 02 2000";
const f = "30 05 1995, 28 02 2000";

isDate = (input) => {
  if (input.length !== 22)
    // To verify whether user is standard imput or not
    return `Please type in two dates like 'DD MM YYYY, DD MM YYYY'1`;
    //return false;

  const space = [input[2], input[5], input[11], input[14], input[17]]; // To get the blanks in the
  const temp = space.map((m) => m == " "); // to verify whether all the spaces are in the correct position, and return boolean value
  const result = temp.filter((m) => m.toString().length > 4); // to verify whether there is a false in the array
  if (result.length !== 0) {
    return `Please type in two dates like 'DD MM YYYY, DD MM YYYY'2`;
    //return false;
  }
  //To get two dates
  const firstDate = input.substring(0, 10);
  const secondDate = input.substring(12);
  //return secondDate;
  //To set the standard form of input
  let reg = /^(((0?[1-9]|[12]\d|3[01])\s(0?[13578]|1[02])\s(19\d{2}|200\d|2010))|((0?[1-9]|[12]\d|30)\s(0?[13456789]|1[012])\s(19\d{2}|200\d|2010))|((0?[1-9]|1\d|2[0-8])\s0?2\s(19\d{2}|200\d|2010))|(0?[1-9]|1\d|2[0-9])\s0?2\s(((19)([13579][26]|[2468][048]|0[48]))|(200[048])))$/;
  //return reg.test(secondDate)
  if (!reg.test(firstDate)) {//to vefiry the first date
    return `Please type in two dates like 'DD MM YYYY, DD MM YYYY'3`;
    //return false;
  } else if (!reg.test(secondDate)) {//to vefiry the second date
    return `Please type in two dates like 'DD MM YYYY, DD MM YYYY'4`;
    //return false;
  } else return true;

    //return false;
};

// to calculate the difference of two date
dateDiffer = (input) => {
  let tempDate, newDate1, newDate2, Days, Date1, Date2;
  Date1 = input.substring(0, 10);
  Date2 = input.substring(12);
  tempDate = Date1.split(" ");
  newDate1 = new Date(tempDate[1] + "-" + tempDate[0] + "-" + tempDate[2]);
  tempDate = Date2.split(" ");
  newDate2 = new Date(tempDate[1] + "-" + tempDate[0] + "-" + tempDate[2]);
  Days = parseInt(Math.abs(newDate1 - newDate2) / 1000 / 60 / 60 / 24);
  return Days;
};

console.log(isDate(a));
console.log(isDate(b));
console.log(isDate(c));
console.log(isDate(d));
console.log(isDate(e));
console.log(isDate(f));

console.log(dateDiffer(a));
console.log(dateDiffer(f));
