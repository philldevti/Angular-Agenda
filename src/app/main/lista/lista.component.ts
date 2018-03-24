import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { FilterPipe } from '../filter.pipe';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers: [FilterPipe]
})
export class ListaComponent  {

  dataSource: any = null;
  @Input('new') 
  public newItem: any = [];
  @Input() 
  public searchCriteria: EventEmitter<any> = new EventEmitter<any>();
  @Output('onSelect') 
  select: EventEmitter<any> = new  EventEmitter<any>(); 

  constructor() { }

  ngOnChanges(e) {
    if(e.newItem && !e.newItem.firstChange){
      this.addItem();
    }
  }

  onSelectItem(e){
    this.select.emit(e);
  }

  addItem(){
    if(!this.dataSource) this.dataSource = [];
    if(this.dataSource.filter(a => a.Nome == this.newItem.Nome).length > 0){
      alert('Este contato já existe');
    }else{
      this.dataSource.push(this.newItem);
      alert('Contato salvo com sucesso');
    }
  }

  apagarItem(e){
    this.dataSource = this.dataSource.filter(a => a.Nome !== e.Nome);
  }
}
