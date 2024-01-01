import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn : "root"
})

export class MyService{
    behaveSub = new BehaviorSubject('a')

    constructor( private http : HttpClient){}

    postUser(obj : any){
        return this.http.post("http://localhost:3000/api/post-user", obj)
    }

    getUsers(){
        return this.http.get("http://localhost:3000/api/get-user")
    }

    updateUser(id:any, obj : any){
        // console.log(id, obj);
        return this.http.put(`http://localhost:3000/api/update-user/${id}`, obj)
    }

    deleteUser(id : any){
        return this.http.delete(`http://localhost:3000/api/delete-user/${id}`)
    }

    getDataToUpdate(data : any){
        this.behaveSub.next(data)
    }
}