import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NoSpaceDirective } from '../no-space.directive';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, CommonModule, NoSpaceDirective],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  userForm = { name: "", middleName: "", lastName: "" }

  OnSubmit(form: NgForm) {
    if (form.valid) {
      alert('Form submitted successfully!');
      localStorage.setItem("userdata", JSON.stringify(form.value))
      console.log('Form Data:', form.value);
      form.reset()
    }
  }
}
