function isWindy(speed , unit) {
    if (speed > 5 && unit === "metric") {
     return true;
    } else {
      return false;
    }
  }
  
  let weather = isWindy(2, 'imperial');
  alert(weather);
  weather=isWindy(20, 'metric');
  alert(weather);