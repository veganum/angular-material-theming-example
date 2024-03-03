import { Component, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-theming-example';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  //?CODIGO PARA BOTON TEMAS
// https://octoperf.com/blog/2021/01/08/angular-material-multiple-themes/#create-a-theme-switching-button
   DARK_THEME_CLASS = 'dark-theme';
   DARK_THEME_LIGHT = 'light';
   DARK_THEME_DARK = 'dark';

  public theme: string =""

  constructor(@Inject(DOCUMENT) private document: Document) {
      this.theme = this.document.documentElement.classList.contains(this.DARK_THEME_CLASS) ? this.DARK_THEME_DARK : this.DARK_THEME_LIGHT;
  }

  public selectDarkTheme(): void {
      this.document.documentElement.classList.add(this.DARK_THEME_CLASS);
      this.theme = this.DARK_THEME_DARK;
  }

  public selectLightTheme(): void {
      this.document.documentElement.classList.remove(this.DARK_THEME_CLASS);
      this.theme = this.DARK_THEME_LIGHT;
  }

}
