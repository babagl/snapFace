import {Injectable} from "@angular/core";
import {FaceSnap} from "../face-snap/model/face-snap.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable, switchMap} from "rxjs";

@Injectable({
  providedIn:'root'
})
export class FaceSnapService{
  constructor(private httpClient : HttpClient) {
  }
  faceSnaps :FaceSnap[]= []

  getAllFaceSnap() :Observable<FaceSnap[]>{
  return this.httpClient.get<FaceSnap[]>('http://localhost:3000/facesnaps')
  }

  getFaceSnapById(faceSnapId:number): Observable<FaceSnap> {
    const faceSnap = this.httpClient.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)
    if(!faceSnap){
      throw new Error('facesnap not found')
    }else{
      return faceSnap
    }
  }


  snapFaceSnapById(faceSnapId:number, snaptype:'snap' | 'unsnap'): Observable<FaceSnap>{
    return this.getFaceSnapById(faceSnapId).pipe(
      map(facesnap => ({
        ...facesnap,
        snaps: facesnap.snaps + (snaptype === 'snap' ? 1 : -1)
      })),
      switchMap(updatedFaceSnap => this.httpClient.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`,updatedFaceSnap))
    )
  }

  addFaceSnap(formValue: {title :string , description: string , imageUrl: string,location? : string}):void{
    const faceSnap: FaceSnap = {
      ...formValue,
      createdDate :new Date(),
      snaps :0,
      id: this.faceSnaps[this.faceSnaps.length - 1].id +1
    };
    this.faceSnaps.push(faceSnap)
  }
}
