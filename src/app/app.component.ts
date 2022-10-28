import { Component } from '@angular/core';
import { CafeServiceService } from '../app/cafe-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RestoCafe';
  count = "22";
  menuList;
  tabsList;
  tabItems;
  cartCount;

  constructor(private cafeService: CafeServiceService) {}

  ngOnInit() {
    this.cafeService.getCafeMenu().subscribe(data => this.menuList = data);
  }
  onPress() {
    this.tabsList = this.menuList[0].table_menu_list;
  }
  tabClick(tab) {
    this.tabItems = tab.category_dishes;
    this.tabItems.menuName = tab.menu_category;
    for(var i=0; i< this.tabItems.length; i++) {
      if(!this.tabItems[i].quantity || this.tabItems[i].quantity===0) {
        this.tabItems[i].quantity = 0;
      }
    }
  }
}
