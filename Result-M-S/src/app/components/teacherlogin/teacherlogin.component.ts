import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacherlogin',
  templateUrl: './teacherlogin.component.html',
  styleUrls: ['./teacherlogin.component.css']
})
export class TeacherloginComponent implements OnInit {

  teacherLoginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private _http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.teacherLoginForm = this.formBuilder.group({
      username: [' '],
      password: [' '],
    })
  }

  //login method
  onTeacherLogin() {
    this._http.get<any>("http://localhost:3000/teacher").subscribe(res => {
      const user = res.find((a: any) => {
        return a.username === this.teacherLoginForm.value.username && a.password === this.teacherLoginForm.value.password
      })
      if (user) {
        alert("Login Successful")
        this.teacherLoginForm.reset();
        this.router.navigate(['teacherlogin'])
      }
      else {
        alert("Crenditials Error")
      }
    }
      , err => {
        alert("Server Side Error")
      }
    )
  }

}
