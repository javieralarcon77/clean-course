import { Tesla, Audi, Toyota, Honda, Vehicle, Ford } from './03-liskov-b';


(() => {

  // con la implementacion de clase abstracta ajustamos el 
  // principio de liskov sin embargamos si agregamos un nuevo carro
  // el interior cambia lo que viola el principo de Open and Close
  // refactorizaremos tambien el interior para seguir el principio
  const printCarSeats = (cars: Vehicle[]) => {

    cars.forEach(car => {
      console.log(car.constructor.name, car.getNumberOfSeats())
    })

    // for (const car of cars) {

    //   if (car instanceof Tesla) {
    //     console.log(car, car.getNumberOfSeats())
    //     continue;
    //   }
    //   if (car instanceof Audi) {
    //     console.log('Audi', car.getNumberOfSeats())
    //     continue;
    //   }
    //   if (car instanceof Toyota) {
    //     console.log('Toyota', car.getNumberOfSeats())
    //     continue;
    //   }
    //   if (car instanceof Honda) {
    //     console.log('Honda', car.getNumberOfSeats())
    //     continue;
    //   }

    // }
  }

  const cars = [
    new Tesla(7),
    new Audi(2),
    new Toyota(5),
    new Honda(5),
    new Ford(4)
  ];


  printCarSeats(cars);

})();