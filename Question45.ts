interface CarInfo {
  manufacturer: string;
  model: string;
  [key: string]: any;
}

function carInfo(manufacturer: string, model: string, ...options: CarInfo[]): CarInfo {
  const car: CarInfo = {manufacturer, model};
  options.forEach((option) => {
    for (const key in option) {
      car[key] = option[key];
    }
  });
  return car;
}
const myCar = carInfo('Toyota', 'Camry', {
  color: 'blue', features: ['sunroof', 'leather seats'],
  manufacturer: "",
  model: ""
});
console.log(myCar); 