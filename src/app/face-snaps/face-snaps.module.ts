import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { SingleFacesnapComponent } from './components/single-facesnap/single-facesnap.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FaceSnapComponent,
    FaceSnapListComponent,
    SingleFacesnapComponent,
    NewFaceSnapComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],exports:[
    FaceSnapComponent,
    FaceSnapListComponent,
    SingleFacesnapComponent,
    NewFaceSnapComponent
  ]

})
export class FaceSnapsModule { }
