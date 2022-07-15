import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentData } from './student.model';
import { ApiService } from 'src/app/shared/api.service';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  addStudentForm!: FormGroup;
  studentModelObj: StudentData = new StudentData
  allStudentData: any;
  showAdd!: boolean;
  showBtn!: boolean;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) { }


  ngOnInit(): void {
    this.addStudentForm = this.formBuilder.group({
      rollno: [''],
      name: [''],
      email: [''],
      score: [''],
    })
    this.getAllStudent()

  }

  clickAddStu() {
    this.addStudentForm.reset();
    this.showAdd = true;
    this.showBtn = false;
  }

  //Now Subscribe data which is mapped via Services
  addStudent() {
    this.studentModelObj.rollno = this.addStudentForm.value.rollno;
    this.studentModelObj.name = this.addStudentForm.value.name;
    this.studentModelObj.email = this.addStudentForm.value.email;
    this.studentModelObj.score = this.addStudentForm.value.score;

    this.api.postStudent(this.studentModelObj).subscribe(res => {
      console.log(res);
      alert("Student Added...");
      //clear fill form data
      let ref = document.getElementById('clear');
      ref?.click();

      this.addStudentForm.reset();
      this.getAllStudent();
    },
      err => {
        alert("Something Error")
      })
  }

  //get All Data
  getAllStudent() {
    this.api.getStudent().subscribe(res => {
      this.allStudentData = res;
    })
  }

  //delete Record
  deleteRecord(data: any) {
    this.api.deleteStudent(data.id).subscribe(res => {
      alert("Record Deleted");
      this.getAllStudent();
    })
  }

  //Edit Student Record

  onEditStudent(data: any) {
    this.showAdd = false;
    this.showBtn = true;
    this.studentModelObj.id = data.id;
    this.addStudentForm.controls['rollno'].setValue(data.rollno);
    this.addStudentForm.controls['name'].setValue(data.name);
    this.addStudentForm.controls['email'].setValue(data.email);
    this.addStudentForm.controls['score'].setValue(data.score);
  }

  updateStu() {
    this.studentModelObj.rollno = this.addStudentForm.value.rollno;
    this.studentModelObj.name = this.addStudentForm.value.name;
    this.studentModelObj.email = this.addStudentForm.value.email;
    this.studentModelObj.score = this.addStudentForm.value.score;

    this.api.updateStudent(this.studentModelObj, this.studentModelObj.id).subscribe(res => {
      alert("Updated Student Details");
      let ref = document.getElementById('clear');
      ref?.click();

      this.addStudentForm.reset();
      this.getAllStudent();
    })

  }

  logout() {
    this.router.navigate(['']);
  }

}
