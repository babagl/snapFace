import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subject, takeUntil, tap} from "rxjs";
import { FaceSnap } from 'src/app/core/model/face-snap.model';
import { FaceSnapService } from 'src/app/core/services/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy{
  private destroy$!:Subject<boolean>
  faceSnap$!: Observable<FaceSnap[]>
  constructor(private faceSnapService:FaceSnapService) {
  }

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>()
    this.faceSnap$ = this.faceSnapService.getAllFaceSnap()

    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(val => console.log(val))
    ).subscribe()
  }

  ngOnDestroy() {
    this.destroy$.next(true)
  }

}
