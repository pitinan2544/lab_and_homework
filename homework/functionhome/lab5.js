function daysToHoursMinutesSeconds(days) {
    var hours = days * 24;
    var minutes = hours * 60;
    var seconds = minutes * 60;
  
    return {
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
  
  // ตัวอย่างการใช้งาน
  var numberOfDays = 1;
  var timeConversion = daysToHoursMinutesSeconds(numberOfDays);
  console.log(timeConversion);
  