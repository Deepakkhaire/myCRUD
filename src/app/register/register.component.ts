import { Component, OnInit } from '@angular/core';
import { MyService } from '../service/my-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  formData : any;
  isNewUser = false;
  id : any;
  constructor( private myServe : MyService){}

  ngOnInit(): void {
    this.formData = new FormGroup({
      firstname : new FormControl(''),
      lastname : new FormControl(''),
      email : new FormControl(''),
      password : new FormControl('')
    })
    
    this.myServe.behaveSub.subscribe((res : any)=>{
      this.id = res._id;
      console.log(this.id);
    if(this.id === localStorage.getItem('id')){
      this.isNewUser = false
      this.formData.setValue({
        firstname :res.firstname,
        lastname : res.lastname,
        email : res.email,
        password : res.password
      })
    }else{
      this.isNewUser = true
    }

    })
  }

  
  saveUser(){
    if(this.isNewUser == true){
      console.log(this.isNewUser);
      
      this.myServe.postUser(this.formData.value).subscribe((res : any)=>{
        console.log(res);
        this.formData.reset()
      })
    }else{
      console.log(this.isNewUser);
      
      console.log(this.id);
      this.myServe.updateUser(this.id, this.formData.value).subscribe((res : any)=>{
        
      })
      this.formData.reset()
       this.isNewUser = true
    }
  }
 

}
