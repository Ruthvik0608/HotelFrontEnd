import { Routes } from '@angular/router';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';

export const routes: Routes = [
    {
        path: 'app-nav-bar',
        component: NavBarComponent
    },
    {
        path: 'app-login-page',
        component: LoginPageComponent
    }
];

