import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sibiling-2',
  imports: [CommonModule],
  templateUrl: './sibiling-2.component.html',
  styleUrl: './sibiling-2.component.css'
})
export class Sibiling2Component implements OnInit {
  message: string = '';

  // =======================  HostBinding
  @HostBinding('class.active') isActive = false;


  // Shared Siblings
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.currentMessage$.subscribe(
      message =>
        this.message = message)
  }

  // =========================  HostListner 
  @HostListener('mouseenter') onMouseEnter() {
    this.isActive = true
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isActive = false;
  }
}
