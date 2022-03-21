import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service'
import { Customer } from "../customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((data: Customer[]) => {
      console.log(data);
      this.customers = data;
    });
  }
}
