import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FriendsService} from '../../../services/friends/friends.service';
import {Observable} from 'rxjs';
import {User} from '../../../interfaces/user';
import {AuthenticationService} from '../../../services/authentication/authentication.service';

@Component({
  selector: 'app-new-friends',
  templateUrl: './new-friends.component.html',
  styleUrls: ['./new-friends.component.less']
})
export class NewFriendsComponent implements OnInit {
  searchForm = new FormGroup({
    search: new FormControl(''),
  });
  public users$: Observable<User[]>;
  public readonly loggedUser: User = this.authService.currentUserValue;

  constructor(private friendsService: FriendsService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.searchForm.valueChanges.subscribe(searchQuery => {
      console.log(searchQuery);
      this.friendsService.searchUsers(searchQuery.search);
    });
    this.users$ = this.friendsService.users$;
  }

  onAddFriend(id: string) {
    this.friendsService.addFriend(id);
  }

}
