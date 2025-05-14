import { Component, inject, OnInit } from '@angular/core';
import { LocalService } from '../local.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-local-storage',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './local-storage.component.html',
  styleUrl: './local-storage.component.css'
})
export class LocalStorageComponent implements OnInit {
  private CrudService = inject(LocalService)
  user = this.CrudService.userSubject;
  userForm!: FormGroup;
  isEditMode = false;

  // constructor() {
  //   this.userForm = new FormGroup({
  //     id: new FormControl(''),
  //     name: new FormControl("", Validators.required),
  //     email: new FormControl("", [Validators.required, Validators.email])
  //   })
  // }

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ["", Validators.required, Validators.minLength(5)],
      email: ["", Validators.required, Validators.email]
    })
  }

  ngOnInit(): void {
    this.user = this.CrudService.userSubject;
  }

  addUpdate() {
    if (this.isEditMode) {
      this.CrudService.updateuser(this.userForm.value)
      this.isEditMode = false
    } else {
      this.CrudService.addUser(this.userForm.value)
    }
    this.resetForm()
  }

  editUser(user: any) {
    // this.userForm = { ...user }
    this.userForm.patchValue(user)
  }

  deleteUser(id: any) {
    this.CrudService.deleteUser(id)
  }

  resetForm() {
    this.userForm.reset()
  }
}
