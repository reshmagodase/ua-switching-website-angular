import { Component, OnInit, ViewChild } from '@angular/core';

import { SwitchService } from './switch.service';

@Component({
  selector: 'app-switch-type',
  templateUrl: './switch-type.component.html',
  styleUrls: ['./switch-type.component.css']
})
export class SwitchTypeComponent implements OnInit {
  step: string = 'firststep';
  
  constructor(private switchService: SwitchService) {
   
  }

  ngOnInit() {
  }

  viewFirstStep() {
    this.step = 'firststep';
  }
  viewMidStep() {
    this.step = 'midstep';
    console.log(this.switchService.step1Obj);
    console.log(this.switchService.step2Obj);
  }
  viewLastStep() {
    this.step = 'laststep';
  }
}
