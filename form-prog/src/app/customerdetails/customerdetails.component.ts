import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { Customer } from '../customer';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   @Input() customer:Customer=new Customer();
   @Output() customerChange:EventEmitter<Customer>=new EventEmitter<Customer>();

   update()
   {
     this.customerChange.emit(this.customer);
   }
}
