import {Injectable} from "@angular/core";
import {FaceSnap} from "../face-snap/model/face-snap.model";

@Injectable({
  providedIn:'root'
})
export class FaceSnapService{
  faceSnaps :FaceSnap[]= [
    {
      id:1,
      title : 'Baba',
      description:'A recu un coup de foudre',
      imageUrl:'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
      createdDate : new Date(),
      snaps: 6,
      location:'Zac Mbao'
    },
    {
      id:2,
      title : 'Abdoulaye Sall',
      description:'A recu un coup de foudre',
      imageUrl:'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
      createdDate : new Date(),
      snaps: 4,
      location:'Keur Massar'
    },
    {
      id:3,
      title : 'Anoush',
      description:'A recu un coup de foudre',
      imageUrl:'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
      createdDate : new Date(),
      snaps: 196,
      location:'rufisque'
    },
    {
      id:4,
      title : 'Baba',
      description:'A recu un coup de foudre',
      imageUrl:'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
      createdDate : new Date(),
      snaps: 6
    }
  ]

  getAllFaceSnap() :FaceSnap[]{
  return this.faceSnaps
  }



  getFaceSnapById(faceSnapId:number): FaceSnap {
    const faceSnap = this.faceSnaps.find(facesnap => facesnap.id === faceSnapId)
    if(!faceSnap){
      throw new Error('facesnap not found')
    }else{
      return faceSnap
    }
  }

  snapFaceSnapById(faceSnapId:number, snaptype:'snap' | 'unsnap'):void{
    const faceSnap = this.getFaceSnapById(faceSnapId)
    snaptype === 'snap' ? faceSnap.snaps++ :faceSnap.snaps--
  }

}
