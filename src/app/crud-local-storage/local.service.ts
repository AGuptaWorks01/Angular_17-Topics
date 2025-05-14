import { Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { map, Observable } from 'rxjs';

export interface User {
  id: Number
  name: string
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private keyStore = 'unknow_data';
  userSubject = signal<User[]>([])

  constructor() {
    this.loaduser()
  }

  private loaduser() {
    const storedUser = localStorage.getItem(this.keyStore)
    const user: User[] = storedUser ? JSON.parse(storedUser) : []
    this.userSubject.set(user)
  }

  getUser(): Observable<User[]> {
    return toObservable(this.userSubject).pipe(map((users: User[]) => [...users]))
  }

  addUser(user: User) {
    const newUser = { ...user, id: Date.now() }
    const updateUser = [...this.userSubject(), newUser]
    this.saveToLocalStorage(updateUser)
  }

  updateuser(user: User) {
    const updateUser = this.userSubject().map(u => u.id === user.id ? { ...user } : user)
    this.saveToLocalStorage(updateUser)
  }

  deleteUser(id: number) {
    const deleteUser = this.userSubject().filter((u) => u.id !== id)
    this.saveToLocalStorage(deleteUser)
  }

  saveToLocalStorage(user: User[]) {
    localStorage.setItem(this.keyStore, JSON.stringify(user))
    this.userSubject.set(user)
  }
}
