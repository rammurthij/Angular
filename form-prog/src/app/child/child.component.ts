import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
public name="Venkey";
public age=23;
@Output() public data =new EventEmitter<{name:string,age:number}>();
send_info()
{
  this.data.emit({name:this.name,age:this.age});
}
}
