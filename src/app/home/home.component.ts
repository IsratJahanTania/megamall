import { Component, OnInit } from '@angular/core';
import { Ip } from '../models/ip.models';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ipInfo: Ip = null;

  constructor(
    private authService: AuthService,
  ) {

  }
  
  ngOnInit(): void {
    this.authService.getIpInfo().subscribe(result => {
      if(result) {
        this.ipInfo = result;
      }
    });
  }

}
