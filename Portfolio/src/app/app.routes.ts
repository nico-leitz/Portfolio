import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutMe } from './shared/components/about-me/about-me';

export const routes: Routes = [
    {
        path: "home",
        component: Home
    },
    {
        path: "about_me",
        component: AboutMe
    }
];
