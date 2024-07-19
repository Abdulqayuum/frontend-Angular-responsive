import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { AboutUsComponent } from './about-us/about-us.component';


export const routes: Routes = [
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    // { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'aboutus',          component: AboutUsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**',          component: ErrorComponent },

];
