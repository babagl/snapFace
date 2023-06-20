import {Component, Input} from '@angular/core';
import {FaceSnap} from "../face-snap/model/face-snap.model";
import {FaceSnapService} from "../services/face-snap.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-facesnap',
  templateUrl: './single-facesnap.component.html',
  styleUrls: ['./single-facesnap.component.scss']
})
export class SingleFacesnapComponent {
  @Input() facesnap! :FaceSnap
  constructor(private faceSnapService:FaceSnapService,private route :ActivatedRoute) {
  }


  ngOnInit(){
    this.buttonText = 'ohSnap'
    const faceSnapId = +this.route.snapshot.params['id'];
    this.facesnap = this.faceSnapService.getFaceSnapById(faceSnapId)
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

}
