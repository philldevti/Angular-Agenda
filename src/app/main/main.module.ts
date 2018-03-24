import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { MainComponent } from './main.component';

import { MainRouting } from './main.routing';
import { FormComponent } from './form/form.component';
import { ListaComponent } from './lista/lista.component';
import { AppService } from '../app.service';
import { AuthGuard } from '../auth.guard';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    MainRouting,
    FormsModule,
    CommonModule
  ],
  declarations: [
    MainComponent,
    FormComponent,
    ListaComponent,
    FilterPipe
  ]
  ,providers:[
     AppService, AuthGuard,FilterPipe
  ],
  bootstrap:[MainComponent]
})
export class MainModule { }
