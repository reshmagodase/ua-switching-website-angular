import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../switch.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

  currentStepObject: any = {};
  constructor(private switchService: SwitchService) {

  }

  ngOnInit() {
  }
  
  modelChanged(data) {
    this.switchService.step1Obj = this.currentStepObject;
  }

}
