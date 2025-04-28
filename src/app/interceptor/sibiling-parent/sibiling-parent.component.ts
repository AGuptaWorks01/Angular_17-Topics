import { Component } from '@angular/core';
import { Sibiling1Component } from "../sibiling-1/sibiling-1.component";
import { Sibiling2Component } from "../sibiling-2/sibiling-2.component";

@Component({
  selector: 'app-sibiling-parent',
  imports: [Sibiling1Component, Sibiling2Component],
  templateUrl: './sibiling-parent.component.html',
  styleUrl: './sibiling-parent.component.css'
})
export class SibilingParentComponent {

}
