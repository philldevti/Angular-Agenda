import { Component, OnInit, EventEmitter, Output, ViewChild, Input } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input('data') dataSource: any = {};
  @Output() onSaveItem: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('txtEmail') txtEmail;
  @ViewChild('txtTelefone') txtTelefone;

  constructor(private serviceHelper: AppService) {
    
  }

  ngOnInit() {
    this.initDataSource();
  }

  ngOnChanges(e) {
    if (e.dataSource.firstChange)
      this.initDataSource();
  }

  initDataSource() {
    this.dataSource = {
      Endereco: {}
    };
  }

  searchCEP() {

    if (!this.dataSource.Endereco) return;
    
    this.serviceHelper.getCEP(this.dataSource.Endereco.cep).subscribe(response => {
      this.dataSource.Endereco = response;

    });
  }

  addEmail(e) {
    if (!this.dataSource.Email) this.dataSource.Email = [];
    this.dataSource.Email.push(e);
    this.txtEmail.nativeElement.value = '';
    this.txtEmail.nativeElement.focus();
  }

  addTelefone(e) {
    if (!this.dataSource.Telefone) this.dataSource.Telefone = [];
    this.dataSource.Telefone.push(e);
    this.txtTelefone.nativeElement.value = '';
    this.txtTelefone.nativeElement.focus();
  }

  apagarEmail(e) {
    this.dataSource.Email = this.dataSource.Email.filter(a => a !== e);
  }

  apagarTelefone(e) {
    this.dataSource.Telefone = this.dataSource.Telefone.filter(a => a !== e);
  }

  onSubmit() {
    this.onSaveItem.emit(this.dataSource);
    this.initDataSource();
  }
  onSaveItem_Click(){}

}
