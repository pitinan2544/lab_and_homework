function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5/9;
    return celsius;
  }
  
  // ตัวอย่างการใช้งาน
  var temperatureInFahrenheit = 52;
  var temperatureInCelsius = fahrenheitToCelsius(temperatureInFahrenheit);
  console.log(temperatureInCelsius);
  