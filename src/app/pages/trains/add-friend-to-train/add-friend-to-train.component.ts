import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FriendsService} from '../../../services/friends/friends.service';
import {Observable} from 'rxjs';
import {User} from '../../../interfaces/user';

@Component({
  selector: 'app-add-friend-to-train',
  templateUrl: './add-friend-to-train.component.html',
  styleUrls: ['./add-friend-to-train.component.less']
})
export class AddFriendToTrainComponent implements OnInit {
  public friends$: Observable<User[]>;

  constructor(public dialogRef: MatDialogRef<AddFriendToTrainComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {userId: string},
              private friendsService: FriendsService) {
  }

  ngOnInit() {
    this.friendsService.getFriends();
    this.friends$ = this.friendsService.friends$;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
