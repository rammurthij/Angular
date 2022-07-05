import { Component, OnInit } from '@angular/core';
import {Customer} from'../customer';
@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  selectedCustomer:Customer=new Customer();
  customers:Customer[]=
  [
    {customerNo:1,name:"Kane",address:'',city:'Chennai',state:'TN'},
    {customerNo:2,name:"Max",address:'',city:'Hyd',state:'TS'},
    {customerNo:3,name:"Jade",address:'',city:'Hyd',state:'TS'}
  ]

  showDetails(customer:Customer)
  {
    this.selectedCustomer=Object.assign({},customer)
  }

  update(customer:Customer)
  {
    var cust=this.customers.find(e=>e.customerNo=customer.customerNo)
    Object.assign(cust,customer)
    alert("customer updated")
  }
  
}
