import { Component, OnInit } from '@angular/core';
import {User} from '../../interfaces/user';
import {AuthenticationService} from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public user: User;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.user = this.authService.currentUserValue;
  }

  logout(): void {
    this.authService.logout();
  }

}
