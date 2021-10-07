function dateToString(timestamp) {
  const obj = new Date(timestamp);

  const hour = obj.getHours().toString();
  let min = obj.getMinutes().toString();

  if (0 <= min && min < 10) {
    min = '0' + min;
  }

  if (hour <= 12) {
    return '오전 ' + hour + ':' + min;
  } else {
    return '오후 ' + hour + ':' + min;
  }
}

export default dateToString;
