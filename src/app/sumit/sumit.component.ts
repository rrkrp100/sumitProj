import { Component, OnInit } from '@angular/core';
import { StateMgService } from '../state-mg.service';

@Component({
  selector: 'app-sumit',
  templateUrl: './sumit.component.html',
  styleUrls: ['./sumit.component.scss']
})
export class SumitComponent implements OnInit {
  stateSays= "";
  constructor(private stateMg:StateMgService) { 
    this.stateMg.userName.subscribe((x)=>{
      console.log(x);
      this.stateSays = x;
    });
  }

  ngOnInit(): void {
    console.log("we are in ngOnInit of Sumit Component");
    console.log(this.stateMg.userName);
  }

}
