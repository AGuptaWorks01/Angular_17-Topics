import { Component } from '@angular/core';
import { ApiSService } from '../api-s.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-s',
  imports: [CommonModule],
  templateUrl: './api-s.component.html',
  styleUrl: './api-s.component.css'
})
export class ApiSComponent {
  products: any[] = [];

  constructor(private productService: ApiSService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      // console.log("__________________", data);
    });
  }
}
