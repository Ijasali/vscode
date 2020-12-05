import { AfterViewInit, Component,  ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavmenuEnum } from './shared/models/directory.model';
import { ExtensionsComponent } from './side-menu/side-menu-detailed-panels/extensions/extensions.component';
import { FileExplorerComponent } from './side-menu/side-menu-detailed-panels/file-explorer/file-explorer.component';
import { SearchComponent } from './side-menu/side-menu-detailed-panels/search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('sidenav', { static: true })
  menuSidenav!: MatSidenav;

  @ViewChild('fileexplorer', { static: true })
  fileExplorer!: FileExplorerComponent;

  @ViewChild('extensions', { static: true })
  extensions!: ExtensionsComponent;

  @ViewChild('search', { static: true })
  search!: SearchComponent;

  title = 'vscode';
  NavmenuEnum = NavmenuEnum;
  presentlyOpenedMenu!: any;

  constructor() { }

 // This method swtiches views between Explorer/Search/Extension whenever the side menu is changed. Closes when no menu is available
  menuChange(newMenu: NavmenuEnum | undefined): void {

    switch (newMenu) {
      case NavmenuEnum.Explorer:
          this.presentlyOpenedMenu = this.fileExplorer;
          break;
      case NavmenuEnum.Search:
          this.presentlyOpenedMenu = this.search;
          break;
      case NavmenuEnum.Extensions:
          this.presentlyOpenedMenu = this.extensions;
          break;
      default:
         this.presentlyOpenedMenu = null;
    }
    if (this.presentlyOpenedMenu) {
      this.menuSidenav.open();
    } else {
      this.menuSidenav.close();
    }

  }

}
