const MAX_VALID_YR = 9999;
const MIN_VALID_YR = 1800;

const isLeap = (year: number) => {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
};

//
// Check is date valid
//
export const checkIsValidDate = (year: number, month: number, day?: number) => {
  // If year, month and day
  // are not in given range
  if (year > MAX_VALID_YR || year < MIN_VALID_YR) return false;
  if (month < 1 || month > 12) return false;
  if (day && (day < 1 || day > 31)) return false;

  // Handle February month
  // with leap year
  if (day && month == 2) {
    if (isLeap(year)) return day <= 29;
    else return day <= 28;
  }

  return true;
};

//
// Convert to 'YYYY/MM/DD' format
//
export const convertToFormatDate = (value: string) => {
  const formattedDate = value.replace(/\D/g, "");

  const YYYY = formattedDate.substring(0, 4);
  const MM = formattedDate.substring(4, 6);
  const DD = formattedDate.substring(6, 8);

  return `${YYYY}${YYYY.length === 4 && MM.length > 0 ? "/" : ""}${MM}${
    MM.length === 2 && DD.length > 0 ? "/" : ""
  }${DD}`;
};

//
// Convert to 'YYYY,MM,DD' format from 'YYYY/MM/DD'
//
export const convertToFormatDateWithComma = (value: string) => {
  const [year, month, day] = value.split("/").map(Number);
  const parsedDate = new Date(year, month - 1, day);

  return parsedDate;
};
