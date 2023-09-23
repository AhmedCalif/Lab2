const monthCode = {
    January: 1,
    February: 4,
    March: 4,
    April: 0,
    May: 2,
    June: 5,
    July: 0,
    August: 3,
    September: 6,
    October: 1,
    November: 4,
    December: 6,
  };
  
  const daysOfWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  function getDayOfTheWeek(year, month, date) {
    const last2Digits = (year % 100);
    const getFitCount = Math.floor(last2Digits / 12);
    let monthCodeCounter = monthCode[month];
    const getRemainder = (last2Digits - (getFitCount * 12));
    const getFitCount2 = Math.floor(getRemainder / 4);
    const addDay = parseInt(date);
    const first2Digits = Math.floor(year / 100);
  
    if (first2Digits == 16) {
      monthCodeCounter += 6;
    } else if (first2Digits == 17) {
      monthCodeCounter += 4;
    } else if (first2Digits == 18) {
      monthCodeCounter += 2;
    } else if (first2Digits == 20) {
      monthCodeCounter += 6;
    } else if (first2Digits == 21) {
      monthCodeCounter += 4;
    }
  
    if (isLeapYear(year) && (month === "January" || month === "February")) {
      monthCodeCounter--;
    }
  
    const total = ((addDay + getRemainder + getFitCount + getFitCount2 + monthCodeCounter) % 7);
    return daysOfWeek[total];
  }
  
  console.log(getDayOfTheWeek(1816, "January", 15)); 

  
  function makeCalendar() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    for (let month = 0; month < 12; month++) {
      for (let day = 1; day <= 31; day++) {
        const currentDate = new Date(2023, month, day);
        
        if (currentDate.getMonth() === month) {
          const dayOfWeek = daysOfWeek[currentDate.getDay()];
          console.log(`Date: ${currentDate.toDateString()}, Day: ${dayOfWeek}`);
        }
      }
    }
  }

 makeCalendar();









































































 















