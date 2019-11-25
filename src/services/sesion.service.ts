import { Injectable } from '@angular/core';
import { User } from '../types';

@Injectable()
export class SesionService {

    user: User = new User();
    logged: boolean = false;

    constructor( ) {
    }

    isLogged() {
        this.logged = localStorage.getItem('loggin') === 'true';
        return this.logged;
    }
}
