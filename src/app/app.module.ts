import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { SharedModule } from './shared/shared.module';
import { SideMenuListComponent } from './side-menu/side-menu-list/side-menu-list.component';
import { SideMenuDetailPanelContainerComponent } from './side-menu/side-menu-detail-panel-container/side-menu-detail-panel-container.component';
import { FileExplorerComponent } from './side-menu/side-menu-detailed-panels/file-explorer/file-explorer.component';
import { SearchComponent } from './side-menu/side-menu-detailed-panels/search/search.component';
import { ExtensionsComponent } from './side-menu/side-menu-detailed-panels/extensions/extensions.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuDetailPanelContainerComponent,
    EditorComponent,
    FileExplorerComponent,
    SearchComponent,
    ExtensionsComponent,
    SideMenuListComponent,

  ],
  imports: [
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
