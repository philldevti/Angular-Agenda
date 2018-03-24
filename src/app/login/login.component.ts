import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public primeiraColuna: string = "col-md-4";

  constructor(
      private serviceHelper: AppService,
     private router: Router
  ){
   }

   ngOnInit(){
     
   }

  dataSource: any={};
  authError: boolean = false;

  onSubmit() {
    this.authError = false;
    if(this.dataSource.Usuario == "agenda" && this.dataSource.Senha == '123'){
       localStorage.setItem(this.serviceHelper.AUTH_COOKIE,'Usuário Logado')
       this.router.navigate(['']);
      console.log('asda');
    }else{
        this.authError = true;
      }
    }

}
