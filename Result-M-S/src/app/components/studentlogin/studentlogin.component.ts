import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {

  studentLoginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router,
    private _http: HttpClient, private api: ApiService
  ) { }

  ngOnInit() {
    this.studentLoginForm = this.formBuilder.group({
      rollno: [' '],
      email: [' '],
    })
  }

  onStudentLogin() {
    console.log(this.studentLoginForm.value.rollno);
    this._http.get<any>("http://localhost:3000/posts").subscribe(res => {
      const user = res.find((a: any) => {
        console.log("in method" + a.rollno)
        // if( a.rollno == this.studentLoginForm.value.rollno && a.email == this.studentLoginForm.value.email)
        return a.rollno == this.studentLoginForm.value.rollno && a.email == this.studentLoginForm.value.email
        // return a;
      })
      if (user) {
        alert("Login Successful");
        // console.log(user.id);
        // console.log(user.rollno);
        // console.log(user.name);
        // console.log(user.email);
        // console.log(user.score);
        this.studentLoginForm.reset();
        this.router.navigate(['studentlogin/'+user.id],);
      }
      else {
        alert("Credentials Error")
      }
    }
      , err => {
        alert("Server Side Error")
      }
    )
  }


}
