import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit{

  firstName: string ='';
  terms: boolean =false;

  constructor(){
  
  }
  addCustomer(formValue: NgForm){
    console.log(formValue.value);
    
  }

  ngOnInit(): void {
    
  }

}
