import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sibiling-1',
  imports: [],
  templateUrl: './sibiling-1.component.html',
  styleUrl: './sibiling-1.component.css'
})
export class Sibiling1Component {

  constructor(private sharedService: SharedService) { }

  sendMessage() {
    this.sharedService.changeMessage("Hello From Sibiling 2!")
    console.log(".......Muje call kiya ");
  }

}
