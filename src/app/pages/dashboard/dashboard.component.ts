import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';


export interface PeriodicElement {
  position: number;
  firstname: string;
  lastname: string;
  phonenumber: string;
  nationalcode: string;
  disease: string;
  delete: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  x: any;
  y: any;
  flag = false;
  avatar = 'assets/avatar.jpg';
  userInfo: string;
  displayedColumns: string[] = ['delete', 'disease', 'nationalcode', 'phonenumber', 'lastname', 'firstname', 'position'];
  dataSource = ELEMENT_DATA;
  private a: any;


  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.auth.userInfo().subscribe(rsp => {
      // @ts-ignore
      this.userInfo = rsp.username;
    });
    // this.dataSource = [];
    this.auth.get_all_reports().subscribe(data => {
      // @ts-ignore
      this.dataSource = [];
      let i = 1;
      // tslint:disable-next-line:forin
      for (const key in data) {
        const value = data[key];
        // tslint:disable-next-line:max-line-length
        this.dataSource.push({delete: 'حذف', disease: value.disease, nationalcode: value.national_code, phonenumber: value.phone_number, lastname: value.last_name, firstname: value.first_name, position: i});
        i = i + 1;
      }
  });
  }

  // tslint:disable-next-line:typedef
  delete_patient(nc: any){
    this.auth.delete_patient(nc).subscribe(data => {
      console.log(data);
    });
    location.reload(true);


  }

  logout(): void{
    this.auth.logout();
  }
}
