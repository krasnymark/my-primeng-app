// import { Car } from '../model/car';
// import { Observable, BehaviorSubject } from 'rxjs';

// export class CarService {
//   _cars: BehaviorSubject<Car[]> = new BehaviorSubject(this.cars());

//   private cars(): Car[] {
//     const cars: Car[] = [];
//     cars.push(new Car('12345', 2007, 'Toyota', 'black'));
//     cars.push(new Car('123ab', 2008, 'Honda', 'blue'));
//     cars.push(new Car('12abc', 2009, 'Mazda', 'red'));
//     return cars;
//   }
//   public getCars(): Observable<Car[]> {
//     return this._cars;
//   }
// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Car } from '../model/car';

@Injectable()
export class CarService {

    constructor(private http: HttpClient) {}

    getCarsSmall() {
        return this.http.get('/showcase/resources/data/cars-small.json')
                    .toPromise()
                    .then(res => <Car[]> res.data)
                    .then(data => { return data; });
    }
}
