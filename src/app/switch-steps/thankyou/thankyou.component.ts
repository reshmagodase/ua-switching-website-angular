import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../switch.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  switchType: string = '';
  email: string = '';
  constructor(public switchService: SwitchService) { }


  ngOnInit() {
    this.switchType = this.switchService.currentUrl;
    this.email = this.switchService.personalObj.emailAddress;
  }
}
