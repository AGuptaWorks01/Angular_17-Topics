import { CommonModule } from '@angular/common';
import { Component, NgZone, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NetworkService } from './network.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  // isOnline: boolean = true;
  // private intervalId: any;

  // constructor(private zone: NgZone) { }

  // ngOnInit(): void {
  //   window.addEventListener('online', () => this.updateStatus(true));
  //   window.addEventListener('offline', () => this.updateStatus(false));

  //   this.checkRealConnection();
  //   this.intervalId = setInterval(() => this.checkRealConnection(), 2000)
  // }

  // ngOnDestroy(): void {
  //   clearInterval(this.intervalId)
  // }

  // private updateStatus(status: boolean) {
  //   this.zone.run(() => this.isOnline = status)
  // }

  // private checkRealConnection() {
  //   fetch('https://ipv4.icanhazip.com/', { method: 'GET', cache: 'no-store' })
  //     .then(() => this.updateStatus(true))
  //     .catch(() => this.updateStatus(false))
  // }


  // // =================== Another way using Service

  isOnline = true;
  constructor(private networkService: NetworkService) { }

  ngOnInit(): void {
    this.networkService.onlineStatus$.subscribe((status: any) => {
      this.isOnline = status
    })
  }
}
