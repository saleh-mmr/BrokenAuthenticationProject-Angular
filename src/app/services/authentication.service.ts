import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;


  // tslint:disable-next-line:typedef
  login(data) {
    return this.http.post<any>('http://127.0.0.1:8000/login/', data)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  // tslint:disable-next-line:typedef
  logout() {
    // remove user from local storage to log user out
    this.http.get('http://127.0.0.1:8000/logout/' ).subscribe(data => {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
    });
    this.router.navigate(['/']);
  }

  // tslint:disable-next-line:typedef
  get_all_reports(){
    return this.http.get('http://127.0.0.1:8000/show-report-list/');
  }

  // tslint:disable-next-line:typedef
  delete_patient(data){
    const str = 'http://127.0.0.1:8000/delete-patient/' + data;
    return this.http.get(str);
  }

  // tslint:disable-next-line:typedef
  add_patient(data){
    return this.http.post<any>('http://127.0.0.1:8000/delete-patient/', data);
  }

  // tslint:disable-next-line:typedef
  isAdmin(){
    return this.http.get('http://127.0.0.1:8000/is-admin/');
  }

  // tslint:disable-next-line:typedef
  userInfo(){
    return this.http.get('http://127.0.0.1:8000/user-info/');
  }


}
