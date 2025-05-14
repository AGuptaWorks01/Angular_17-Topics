import { Component, ViewChild } from '@angular/core';
import { ResuableComponent } from "../resuable/resuable.component";
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-parent',
  imports: [ResuableComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  @ViewChild('res') resComp!: ResuableComponent;
  callResuable() {
    this.resComp.showAlert();
  }

  message: string = '';

  receiveMessage(msg: string) {
    this.message = msg;
    console.log(msg);
  }



}
