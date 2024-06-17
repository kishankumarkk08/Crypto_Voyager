
export const reduceNum = (number) => {
  const numberWithCommas = number?.toLocaleString('en-IN');
  var arr = numberWithCommas?.split(",");
  if (arr?.length == 4) {
    return arr[0] + "." + arr[1].slice(0, 2) + "CR";
  }
  else if (arr?.length == 3) {
    return arr[0] + "." + arr[1].slice(0, 2) + "L";
  }
  else if (arr?.length == 2) {
    return arr[0] + "." + arr[1].slice(0, 2) + "K";
  }
  else {
    return number?.toLocaleString('en-IN');
  }
};
