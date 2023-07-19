import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{
  userEmail:string = 'Anoush Ka'

  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }

  passerSurSnapface() {
    this.router.navigateByUrl('facesnaplist')
  }
  onSubmitForm(form:NgForm){
    console.log(form.value)
  }
}
