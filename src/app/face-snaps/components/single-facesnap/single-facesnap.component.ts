import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, pipe, tap} from "rxjs";
import { FaceSnap } from 'src/app/core/model/face-snap.model';
import { FaceSnapService } from 'src/app/core/services/face-snap.service';

@Component({
  selector: 'app-single-facesnap',
  templateUrl: './single-facesnap.component.html',
  styleUrls: ['./single-facesnap.component.scss']
})
export class SingleFacesnapComponent {

  faceSnap$!:Observable<FaceSnap>
  constructor(private faceSnapService:FaceSnapService,private route :ActivatedRoute) {
  }


  ngOnInit(){
    this.buttonText = 'ohSnap'
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(faceSnapId)
  }


  buttonText!:String

  onAddSnap(faceSnapId: number){

    if (this.buttonText === 'ohSnap'){
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(()=> this.buttonText = 'Oups Un Snap!!!'
        )
      )

    }else{

      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(
          ()=> this.buttonText = 'ohSnap'

        )
      )
    }
  }

}
