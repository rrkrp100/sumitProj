import { Component } from '@angular/core';
import { StateMgService } from './state-mg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sumit';
  isDisabled = true;
  stateSays= "";
  constructor(private stateMg:StateMgService){
    this.stateMg.userName.subscribe((x)=>{
      console.log(x);
      this.stateSays = x;
    });
  }

  printStuff(stringToPrint: string) {
    console.log(stringToPrint);
    this.stateMg.userName.next(stringToPrint);
  }
  
  enableStuff() {
    this.isDisabled = !this.isDisabled;
    console.log(this.stateMg.userName);
  }
}
