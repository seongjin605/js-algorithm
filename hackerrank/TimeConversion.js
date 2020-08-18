function timeConversion(s) {
  let splitedData = s.split(":");
  const result = splitedData.map((x, i, arr) => {
    const parsed = parseInt(x);
    if (i === 0) {
      return s.toUpperCase().includes("PM") ? parsed + 12 : parsed;
    } else if (x.includes("PM") || x.includes("AM")) {
      return parsed;
    }
    return parsed > 10 ? parsed : "0" + parsed;
  });

  return `${result[0]}:${result[1]}:${result[2]}`;
}

console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("06:55:55AM"));
console.log(timeConversion("10:55:55AM"));
console.log(timeConversion("10:55:55PM"));
