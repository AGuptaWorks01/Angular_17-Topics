
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      middleName: ['', [Validators.required, this.noSpaceValidator]],
      lastName: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  noSpaceValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    return value.trim().length === 0 ? { noSpace: true } : null;
  }

  onSubmit() {
    if (this.userForm.valid) {
      alert('Form Submitted Successfully');
      console.log(this.userForm.value);
      localStorage.setItem("reactiveformdata", JSON.stringify(this.userForm.value))
      this.userForm.reset();
    }
  }
}
