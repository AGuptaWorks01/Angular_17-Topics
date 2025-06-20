import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NetworkService {
    private onlineStatus = new BehaviorSubject<boolean>(true); // Default: true
    public onlineStatus$ = this.onlineStatus.asObservable(); // Observable to subscribe

    constructor(private zone: NgZone) {
        this.checkConnection();
        this.watchConnection();
    }

    private updateStatus(status: boolean) {
        this.zone.run(() => this.onlineStatus.next(status));
    }

    private checkConnection() {
        fetch('https://ipv4.icanhazip.com/', { method: 'GET', cache: 'no-store' })
            .then(() => this.updateStatus(true))
            .catch(() => this.updateStatus(false));
    }

    private watchConnection() {
        interval(2000).subscribe(() => this.checkConnection());
        window.addEventListener('online', () => this.updateStatus(true));
        window.addEventListener('offline', () => this.updateStatus(false));
    }
}
