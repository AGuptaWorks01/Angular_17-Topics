import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sibiling-2',
  imports: [],
  templateUrl: './sibiling-2.component.html',
  styleUrl: './sibiling-2.component.css'
})
export class Sibiling2Component {
  message: string = '';
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.sharedService.currentMessage$.subscribe(
      message =>
        this.message = message)
  }
}
