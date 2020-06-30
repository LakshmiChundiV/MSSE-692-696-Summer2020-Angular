import { Component, OnInit } from '@angular/core';
import {  EmployeeService } from '../employee.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Employee } from '../employee';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private employeeservice : EmployeeService) { }

  employee : Employee=new Employee();
  submitted = false;

  ngOnInit() {
    this.submitted = false;
  }

  employeesaveform = new FormGroup({
    employee_name : new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    employee_email : new FormControl('',[Validators.required,Validators.email]),
    employee_branch : new FormControl()
  });

  saveEmployee(saveEmployee){
    this.employee = new Employee();   
    this.employee.employee_name = this.EmployeeName.value;
    this.employee.employee_email = this.EmployeeEmail.value;
    this.employee.employee_branch = this.EmployeeBranch.value;
    this.submitted = true;
    this.save();
  }

  

  save() {
    this.employeeservice.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
  }

  get EmployeeName() {
    return this.employeesaveform.get('employee_name');
  }

  get EmployeeEmail() {
    return this.employeesaveform.get('employee_email');
  }

  get EmployeeBranch() {
    return this.employeesaveform.get('employee_branch');
  }

  addEmployeeForm() {
    this.submitted = false;
    this.employeesaveform.reset();
  }
}
