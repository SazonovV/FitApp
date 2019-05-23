import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile/profile.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../interfaces/user';
import {AuthenticationService} from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  public user: User;
  private base64textString = '';
  changePassFlag = false;
  userForm: FormGroup;
  passForm: FormGroup;

  constructor(private profileService: ProfileService,
              private fb: FormBuilder,
              private authService: AuthenticationService) {
    this.user = authService.currentUserValue;
  }

  ngOnInit() {
    this.passForm =  this.fb.group({
      firstPass: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.userForm = this.fb.group({
      firstName: [ { value: this.user.firstName, disabled: true }, Validators.required],
      secondName: [ { value: this.user.secondName, disabled: true }, Validators.required],
      email: [{ value: this.user.email, disabled: true }, Validators.required],
    });
  }

  onUpdate(): void {
    this.profileService.getUserInfo().subscribe(value => this.user = this.authService.currentUserValue);
  }
  onChangeSave(): void {
    if (this.userForm.disabled) {
      this.userForm.enable();
      return;
    }
    this.profileService.updateUserInfo(this.userForm.value)
      .subscribe((user: User) => {
        delete(user.password);
        user.token = this.user.token;
        localStorage.setItem('currentUser', JSON.stringify(user));
      });
    this.userForm.disable();
  }
  onFileChanged(event): void {
    const files = event.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    this.user.image = btoa(binaryString);
    this.profileService.updateUserInfo(this.user)
      .subscribe((user: User) => {
        delete(user.password);
        user.token = this.user.token;
        localStorage.setItem('currentUser', JSON.stringify(user));
    });
  }

  onChangePass(): void {
    if (!this.changePassFlag) {
      this.changePassFlag = true;
      return;
    }
    this.changePassFlag = false;
    this.profileService.updateUserInfo(this.passForm.value)
      .subscribe((user: User) => {
        delete(user.password);
        user.token = this.user.token;
        localStorage.setItem('currentUser', JSON.stringify(user));
      });
  }
}
