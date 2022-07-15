import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSerializer } from '@angular/router';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: any;
  data:any;
  id:any;
  constructor(private api: ApiService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getOne();
  }
  
//  //get Student Data
//  getStudent(student:any) {
//   this.api.getparticularstudent(student.id).subscribe(res => {
//     this.student = res;
//     console.log(res);
//     console.log(this.student);
//   })
// }

getOne(){
  this.api.getOneStu(this.id).subscribe(data=>{
    this.data=data;
    console.log(this.data);
  })
}


  logout() {
    this.router.navigate(['']);
  }

}
