import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { map, pipe } from 'rxjs';

@Component({
  selector: 'app-manageusers',
  standalone: false,
  templateUrl: './manageusers.component.html',
  styleUrl: './manageusers.component.css'
})
export class ManageusersComponent {
  users:any[]=[];
  constructor(private userService:UserService){}
  ngOnInit():void{
    this.getusers();
}



getusers():void{
  this.userService.getAllUsers().pipe(
    map((response:any) => response.data)
  ).subscribe((data:any)=>{
    this.users=data;
  });


}

}