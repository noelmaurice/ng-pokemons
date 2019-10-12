import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }	from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate {

	
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		// let url: string = state.url;
        // return this.checkLogin(url);
        console.info('Le guard a bien été appelé !');
        return true;
	}

	

}