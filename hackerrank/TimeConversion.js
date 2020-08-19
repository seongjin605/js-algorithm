function timeConversion(s) {
  let splitedData = s.split(":");
  const result = splitedData.map((x, i, arr) => {
    const parsed = parseInt(x);
    if (i === 0) {
      const hour = parsed % 12;
      return s.toUpperCase().includes("PM") || hour > 10
        ? hour + 12
        : "0" + hour;
    } else if (x.includes("PM") || x.includes("AM")) {
      return parsed > 10 ? parsed : "0" + parsed.toString();
    }
    return parsed > 10 ? parsed : "0" + parsed.toString();
  });
  return `${result[0]}:${result[1]}:${result[2]}`;
}

console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("06:55:55AM"));
console.log(timeConversion("10:55:55AM"));
console.log(timeConversion("10:55:55PM"));
console.log(timeConversion("24:00:00AM"));
