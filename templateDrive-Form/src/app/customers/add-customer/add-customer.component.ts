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
  customerType: string ='';
  description: string='';
  radioButton: boolean=true;
  radioButton1: boolean =true;

  resetForm(formValue: NgForm){
    //formValue.reset();
    formValue.resetForm();
  }

  constructor(){
  
  }
  addCustomer(formValue: NgForm){
    console.log(formValue.value);
    
  }

  ngOnInit(): void {
    
  }
  setFormValue(formValue: NgForm){
    let formDetails={
      firstName:'Raj',
      terms:false,
      customerType:'1',
      description:'',
      radioButton: 1,
      radioButton1: true
    }
    formValue.setValue(formDetails);
  }
}
