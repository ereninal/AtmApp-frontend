import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService:CustomerService) { }
  customers:Customer[];
  ngOnInit(): void {
    this.getCustomers();
    console.log(this.customers);
  }
  getCustomers(){

    this.customerService.getCustomers().subscribe(data=>{
      this.customers = data;
      console.log(data);
    })
  }
}
