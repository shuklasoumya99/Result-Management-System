import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  editStudentForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private _http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.editStudentForm = this.formBuilder.group({
      rollno: [''],
      name: [''],
      email: [''],
      score: [''],
    })
  }

  onEditStudent() {
    this._http.put<any>("http://localhost:3000/student",this.editStudentForm.value).subscribe(res=>{
      alert("Edit Student Successfully");
      this.editStudentForm.reset();
      this.router.navigate(['teacherlogin'])
    }
    ,err=>{
      alert("Something went Wrong")
    }
    )
  }

}
