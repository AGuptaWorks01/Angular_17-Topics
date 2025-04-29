import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  imports: [CommonModule, FormsModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
  // Interpolation(One-way Data Binding)
  Interpolation: string = " I'm One Way Data Binding!"


  // Property Binding(One-way Data Binding)
  imageUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s';


  // Event Binding(One-way Data Binding)
  onClick() {
    alert("I am Event Binding")
  }


  //  Two-way Data Binding
  name: string = "Angular"


  // Style Binding
  textColor = 'red';


  isActive = false;
}
