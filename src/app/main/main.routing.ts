import {ModuleWithProviders, Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import { AuthGuard } from '../auth.guard';
import { LoginComponent } from '../login/login.component';

const mainRoutes: Routes =[
    {path: '', component: MainComponent,canActivate: [AuthGuard], canLoad: [AuthGuard]},
{path: 'login', component: LoginComponent}
    
];

export const MainRouting: ModuleWithProviders = RouterModule.forRoot(mainRoutes);