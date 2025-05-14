import { Component } from '@angular/core';
import { ResuableComponent } from "../resuable/resuable.component";


@Component({
  selector: 'app-child',
  imports: [ResuableComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

}
