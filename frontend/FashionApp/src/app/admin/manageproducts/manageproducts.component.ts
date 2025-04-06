import { Component } from '@angular/core';

@Component({
  selector: 'app-manageproducts',
  standalone: false,
  templateUrl: './manageproducts.component.html',
  styleUrl: './manageproducts.component.css'
})
export class ManageproductsComponent {
  products:any[]=[];
  constructor(){}
  ngOnInit():void{
    this.getproducts();
  }


  getproducts():void{
    // this.userService.getAllUsers().pipe(
    //   map((response:any) => response.data)
    // ).subscribe((data:any)=>{
    //   this.users=data;
    // });
    // this.products=[      
}}
