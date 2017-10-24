import { User } from './../user/user.model';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'user-list',
    templateUrl: "./user-list.component.html"
})
export class UserListComponent {
    constructor(private http: HttpClient) {}

    approve(selectedUser:User){
        this.http.post("http://localhost:3000/approveUser",selectedUser).subscribe((data)=>console.log(data));
    }

    reject(selectedUser:User){
        this.http.post("http://localhost:3000/rejectUser",selectedUser).subscribe((data)=>console.log(data));
    }

}