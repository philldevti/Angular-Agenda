import { NgModule }             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import { componentFactoryName } from '@angular/compiler';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes =[
    {path: '', component: MainComponent,canActivate: [AuthGuard], canLoad: [AuthGuard]},
    {path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}