import {Component, Input, OnInit} from '@angular/core';
import {Observable, concatMap, delay, filter, interval, map, mergeMap, of, take, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  interval$!:Observable<string>;
  redTrainCalled = 0
  yellowTrainCalled = 0

  ngOnInit() {
    // interval(500).pipe(
    //   take(10),
    //   map(value => value % 2 === 0 ? `rouge` : `jaune`),
    //   tap(color => console.log(`la lumiere s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
    //   concatMap(color => this.getTrainObservable$(color)),
    //   tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrive !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
    //   ).subscribe()

    // const interval$ = interval(1000)
    // setTimeout(()=> interval$.subscribe(value => console.log(value)), 3000)
  }

  logger(text :string){
      console.log(`log: ${text}`);

  }


  getTrainObservable$(color: 'rouge'| 'jaune'){
    const isRedTrain = color === 'rouge';
    isRedTrain ? this.redTrainCalled++ : this.yellowTrainCalled--
    const trainIndex = isRedTrain ? this.redTrainCalled : this.yellowTrainCalled
    console.log(`train %c${color} ${trainIndex} appele !`, `text-decoration:underline; color: ${this.translateColor(color)}`)
    return of({
      color , trainIndex
    }).pipe(
      delay(isRedTrain ? 5000 : 6000)
    );
  }



  translateColor(color: 'rouge' | 'jaune'){
    return color === 'rouge' ? 'red' : 'yellow'
  }
}
