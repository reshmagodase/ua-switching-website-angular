import { Component, OnInit } from '@angular/core';
import { SwitchTypeComponent } from '../switch-type.component';
import { SwitchService } from '../switch.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  currentStepObject: any = {};
  constructor(private switchService: SwitchService) {

  }

  ngOnInit() {

  }

  modelChanged(data) {
    this.switchService.step1Obj = this.currentStepObject;
  }


}
