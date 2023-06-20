import {computed, NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FaceSnapListComponent} from "./face-snap-list/face-snap-list.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {SingleFacesnapComponent} from "./single-facesnap/single-facesnap.component";

const routes:Routes =[
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
