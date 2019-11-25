import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public emailFormControl: FormControl;
    public passwordFormControl: FormControl;
    public currentEmail: string;
    public currentPassword: string;
    public email: string;
    public password: string;
    public wrongAccess: boolean = false;

    constructor(private router: Router) {}

    ngOnInit() {
        if (localStorage.getItem('loggin') === 'true') {
            this.router.navigate(['/pokedex']);
        } else {
            this.setupLoginForm();
        }
    }

    setupLoginForm() {
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email,
        ]);
        this.passwordFormControl = new FormControl('', [Validators.required]);
    }

    doSubmitLogin() {
        localStorage.setItem('currentEmail', 'pepito@gmail.com');
        localStorage.setItem('currentPassword', '1234');
        localStorage.setItem('loggin', 'true');
        this.currentEmail = localStorage.getItem('currentEmail');
        this.currentPassword = localStorage.getItem('currentPassword');
        if (this.currentEmail === this.email && this.currentPassword === this.password) {
            this.router.navigate(['/pokedex']);
        } else {
            this.wrongAccess = true;
            setTimeout(() => {
                this.wrongAccess = false;
            }, 3000);
        }
    }

}
