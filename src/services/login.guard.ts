import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { SesionService } from './sesion.service';

@Injectable()
export class LoginAuthGuard implements CanActivate {

    constructor(private authService: SesionService, private router: Router) { }

    canActivate() {
        if (!this.authService.isLogged()) {
            console.log('User no logged, please log in');
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}
