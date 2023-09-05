import {computed, NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { NewFaceSnapComponent } from "./face-snaps/components/new-face-snap/new-face-snap.component";
import { SingleFacesnapComponent } from "./face-snaps/components/single-facesnap/single-facesnap.component";
import { FaceSnapListComponent } from "./face-snaps/components/face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./landing-page/components/landing-page/landing-page.component";

const routes:Routes =[
  {path:'create',component: NewFaceSnapComponent},
  {path:'facesnaplist/:id',component: SingleFacesnapComponent},
  {path:'facesnaplist', component: FaceSnapListComponent},
  {path:'',component:LandingPageComponent}
];
@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{}
