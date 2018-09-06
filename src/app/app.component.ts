import { Component } from '@angular/core';
import { MenuItem } from './menu-item/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  menuItems: MenuItem[] = [
    { displayName: 'Dashboard', routerLink: '/dashboard' },
    { displayName: 'Heroes', routerLink: '/heroes' }
  ];
  selectedMenuItem = this.menuItems[0];

  setSelectedMenuItem(menuItem: MenuItem): void{
    this.selectedMenuItem = menuItem;
  };

  isActive(menuItem: MenuItem): boolean {
    return menuItem == this.selectedMenuItem;
  };
}
