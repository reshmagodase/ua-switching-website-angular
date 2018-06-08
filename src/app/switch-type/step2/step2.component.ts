import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../switch.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  currentStepObject: any = {};
  constructor(private switchService: SwitchService) {

  }

  ngOnInit() {
  }

  modelChanged(data) {
    this.switchService.step2Obj = this.currentStepObject;
  }
}
