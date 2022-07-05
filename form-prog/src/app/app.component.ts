import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-prog';
  callSubmit(usr:any)
  {
    console.log("Called successfully."+usr.user);
  }

submitData(frm:any)
  {
    console.log(frm.fName+" "+frm.Name1+" "+frm.comment);
  }
}