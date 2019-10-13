import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }
	from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

	// injection des AuthService et Router via le constructeur
	constructor(private authService: AuthService, private router: Router) { }

    /**
     * 
     * @param route route après identification réussie
     * @param state capture de l'URL en courante
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		let url: string = state.url;
		return this.checkLogin(url);
	}

	checkLogin(url: string): boolean {
		if (this.authService.isLoggedIn) { 
            return true; 
        }
        else
        {
            this.authService.redirectUrl = url;
            this.router.navigate(['/login']);
    
            return false;
        }
	}

}