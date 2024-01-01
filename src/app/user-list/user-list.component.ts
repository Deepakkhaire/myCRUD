import { Component, OnInit } from '@angular/core';
import { MyService } from '../service/my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  userLists : any;
  constructor(private myServe : MyService, private router : Router){}

  ngOnInit(): void {
   this.fetchData()
  }
  fetchData(){
    this.myServe.getUsers().subscribe((res : any)=>{
      this.userLists = res
    })
  }
  editUser(data : any){
    // console.log(data);
    localStorage.setItem("id", data._id)
    this.myServe.getDataToUpdate(data)
    this.router.navigate(['/createUser'])
  }

  deleteUser(data : any){
    this.myServe.deleteUser(data._id).subscribe();
    this.fetchData()

  }

}
