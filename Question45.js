"use strict";
function carInfo(manufacturer, model, ...options) {
    const car = { manufacturer, model };
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
