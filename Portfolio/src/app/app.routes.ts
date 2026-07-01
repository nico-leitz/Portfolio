import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutMe } from './shared/components/about-me/about-me';
import { LegalNotice } from './pages/legal-notice/legal-notice';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "about_me",
        component: AboutMe
    },
    {
        path: "legal-notice",
        component: LegalNotice
    },
    {
        path: "privacy-policy",
        component: PrivacyPolicy
    }
];
