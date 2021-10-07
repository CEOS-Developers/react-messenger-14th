function dateToString(timestamp) {
  const obj = new Date(timestamp);

  const hour = obj.getHours().toString();
  const min = obj.getMinutes().toString();

  if (hour <= 12) {
    return '오전 ' + hour + ':' + min;
  } else {
    return '오후 ' + hour + ':' + min;
  }
}

export default dateToString;
