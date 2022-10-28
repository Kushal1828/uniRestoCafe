import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  @Input() menuItems;
  @Output() totalCount = new EventEmitter();
  count = 0;

  constructor() { }

  ngOnInit(): void {
    console.log(this.menuItems);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.count = this.count + parseInt(event.target.value);
    this.totalCount.emit(this.count.toString());
  }

  addQuantity(item) {
    item.quantity += 1;
    this.count += 1;
    this.totalCount.emit(this.count.toString());
  }
  subtractQuantity(item) {
    item.quantity -= 1;
    this.count -= 1;
    if(item.quantity < 0) {
      item.quantity = 0;
    }
    if(this.count < 0) {
      this.count = 0;
    }
    this.totalCount.emit(this.count.toString());
  }

}
