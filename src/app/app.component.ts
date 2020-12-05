import { Component,  ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavmenuEnum } from './shared/models/directory.model';
import { ExtensionsComponent } from './side-menu/side-panel/extensions/extensions.component';
import { FileExplorerComponent } from './side-menu/side-panel/file-explorer/file-explorer.component';
import { SearchComponent } from './side-menu/side-panel/search/search.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vscode';
  NavmenuEnum = NavmenuEnum;
  @ViewChild('sidenav', { static: true })
  menuSidenav!: MatSidenav;

  @ViewChild('fileexplorer', { static: true })
  fileExplorer!: FileExplorerComponent;

  @ViewChild('extensions', { static: true })
  extensions!: ExtensionsComponent;

  @ViewChild('search', { static: true })
  search!: SearchComponent;

  presentlyOpenedMenu!: any;
  constructor() { }



  menuChange(newMenu: NavmenuEnum): void {

    let open:any;
    switch (newMenu) {
      case NavmenuEnum.Explorer:
          open = this.fileExplorer;
          break;
      case NavmenuEnum.Search:
          open = this.search;
          break;
      case NavmenuEnum.Extensions:
          open = this.extensions;
          break;
    }
    if (!this.presentlyOpenedMenu || this.presentlyOpenedMenu === open ) {
      this.menuSidenav.toggle().then( x => {
        if (x === 'close'){
          this.presentlyOpenedMenu = null;
        }
      });
    }
    this.presentlyOpenedMenu = open;

  }

}
