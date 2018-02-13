import {Component} from '@angular/core';
@Component({
  selector: 'my-employee',
templateUrl : './employee.component.html'
})
export class EmployeeComponent {
    firstName : string ='preetinder';
    lastName : string ='Singh';
    gender : string ='Male';
    age : number =27;
}