import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {map, Observable} from "rxjs";
import {Router} from "@angular/router";
import { FaceSnapService } from 'src/app/core/services/face-snap.service';
import { FaceSnap } from 'src/app/core/model/face-snap.model';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit{
  snapForm!:FormGroup
  faceSnapProvides$!:Observable<FaceSnap>
  urlRegex!:RegExp

  constructor(private formBuidler:FormBuilder, private faceSnapService:FaceSnapService, private router:Router) {
  }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuidler.group({
      title: [null , Validators.required ],
      description:[null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location:[null]
    })
    this.faceSnapProvides$ = this.snapForm.valueChanges.pipe(
      map( formValue => ({
        ...formValue,
        createdDate : new Date(),
        id : 0,
        snaps: 0,

      }))
    )
    this.faceSnapProvides$.subscribe(
      (value)=>{
        console.log(value.title)
      }
    )
  }

  onSubmitForm(){
    console.log(this.snapForm.value)
    this.faceSnapService.addFaceSnap(this.snapForm.value);
    this.router.navigateByUrl('/facesnaplist');
  }
}
