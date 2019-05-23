import { Component, OnInit } from '@angular/core';
import {FriendsService} from '../../services/friends/friends.service';
import {Observable} from 'rxjs';
import {User} from '../../interfaces/user';
import {AuthenticationService} from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.less']
})
export class FriendsComponent implements OnInit {
  public users$: Observable<User[]>;
  public readonly loggedUser: User = this.authService.currentUserValue;

  constructor(private friendsService: FriendsService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.friendsService.getFriends();
    this.users$ = this.friendsService.friends$;
  }

  onDeleteFriend(id: string) {
    this.friendsService.deleteFriend(id);
  }
}
