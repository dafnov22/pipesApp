import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  // public items: MenuItem[] = [];
  public menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    // this.items = [
    //   { label: 'New', icon: 'pi pi-fw pi-plus'},
    //   { label: 'Open', icon: 'pi pi-fw pi-download'},
    //   { label: 'Undo', icon: 'pi pi-fw pi-refresh'}
    // ];
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'uncommon'
          },

        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Otro elemento',
            icon: 'pi pi-cog',
          }
        ]
      }
    ];
  }

}
