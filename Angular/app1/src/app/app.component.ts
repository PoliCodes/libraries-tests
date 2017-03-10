import {Component} from '@angular/core';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {
  item = '';
  lista = [];
  disabled = false;
  insertItem() {
    this.lista.push(this.item);
    this.item = "";
  }
  deleteItem(item) {    
    this.lista.splice(item, 1);    
  }
  onKey(event : any) { // without type info
    this.item = event.target.value;
  }
}
