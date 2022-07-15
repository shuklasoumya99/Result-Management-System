import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {


  constructor(private formBuilder: FormBuilder,
    private _http: HttpClient, private router: Router) { }


  //create student using post
  postStudent(data: any) {
    return this._http.post<any>("http://localhost:3000/posts", data).pipe(map((res: any) => {
      return res;
    }))
  }

  // get student data using get method
  getStudent() {
    return this._http.get<any>("http://localhost:3000/posts",).pipe(map((res: any) => {
      return res;
    }))
  }

  //update student using put
  updateStudent(data: any, id: number) {
    return this._http.put<any>("http://localhost:3000/posts/" + id, data).pipe(map((res: any) => {
      return res;
    }))
  }

  //delete student using delete
  deleteStudent(id: number) {
    return this._http.delete<any>("http://localhost:3000/posts/" + id).pipe(map((res: any) => {
      return res;
    }))
  }

  // //get a prticular student
  // getparticularstudent(id: number) {
  //   return this._http.get<any>("http://localhost:3000/posts/" + id).pipe(map((res: any) => {
  //     return res;
  //   }))
  // }

getOneStu(id:any){
return this._http.get("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
  return res;
}))
}


}
