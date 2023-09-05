import { Component, OnInit,Input } from '@angular/core';
import {Router} from "@angular/router";
import { FaceSnap } from 'src/app/core/model/face-snap.model';
import { FaceSnapService } from 'src/app/core/services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() facesnap! :FaceSnap
  constructor(private faceSnapService:FaceSnapService,private router:Router) {

  }

   ngOnInit(){
   this.buttonText = 'ohSnap'
  }

   buttonText!:String

  onAddSnap(){
  if (this.buttonText === 'ohSnap'){
      this.faceSnapService.snapFaceSnapById(this.facesnap.id,'snap')
      this.buttonText = 'Oups Un Snap!!!'
    }else{
      this.buttonText = 'ohSnap'
      this.faceSnapService.snapFaceSnapById(this.facesnap.id, 'unsnap')
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaplist/${this.facesnap.id}`)
  }
}
