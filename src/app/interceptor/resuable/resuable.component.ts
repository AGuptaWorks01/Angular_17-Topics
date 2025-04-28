import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-resuable',
  imports: [CommonModule],
  templateUrl: './resuable.component.html',
  styleUrl: './resuable.component.css'
})
export class ResuableComponent {

  // Parent to Child
  @Input() alertMsg: string = '';
  @Input() alertType: string = '';

  // =====  Alternative way
  // alertMsg = input<string>()
  // alertType = input<string>()


  // Child to parent 
  @Output() messageEvent = new EventEmitter<string>();
  sendMessage() {
    this.messageEvent.emit("Hello from Child(@Output)...!")
  }


  // ViewChild
  showAlert() {
    alert("Alert from Resuable....!")
  }
}
