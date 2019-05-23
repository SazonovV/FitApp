import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import {Register} from '../../interfaces/register';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.less']
})
export class StartPageComponent implements OnInit {
  public signInOpened = false;
  public registerOpened = false;
  public registerError = false;
  private returnUrl: string;
  loginForm = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.email,
    ]],
    password: ['', Validators.required]
  });
  registerForm = this.fb.group({
    firstName: ['', Validators.required],
    secondName: ['', Validators.required],
    email: ['', Validators.required],
    firstPass: ['', [Validators.required, Validators.minLength(8)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(
    private authService: AuthenticationService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    iconRegistry.addSvgIcon(
      'arrow-back',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/left-arrow.svg'));
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    if (this.authService.currentUserValue) {
      this.router.navigate([this.returnUrl]);
    }
  }
  onClickRegister(): void {
    this.registerOpened = true;
  }
  onClickSignIn(): void {
    this.signInOpened = !this.signInOpened;
  }
  onBack(): void {
    this.signInOpened = false;
    this.registerOpened = false;
  }
  onLoginSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.loginForm.value, this.returnUrl)
      .subscribe(() => true,
        error1 => console.log('nipralna'));
  }

  onRegisterSubmit(user: Register) {
    if (this.registerForm.invalid) {
      return;
    }
    this.authService.register(user).subscribe(data => this.openSignIn(),
      error1 => {
      this.registerError = true;
      });
  }
  private openSignIn(): void {
    this.registerOpened = false;
    this.signInOpened = true;
  }
}
