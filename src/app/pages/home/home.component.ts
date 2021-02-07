import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import {AuthenticationService} from '../../services/authentication.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAdmin = false;
  slide2 = 'assets/images/slide2.png';

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    AOS.init();
    this.auth.isAdmin().subscribe(rsp => {
      console.log(rsp);
      // @ts-ignore
      this.isAdmin = rsp.flag;
    });
  }

}
