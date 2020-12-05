import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './shared/modules/material.module';
import { EditorComponent } from './editor/editor.component';
import { SharedModule } from './shared/shared.module';
import { SideMenuListComponent } from './side-menu/side-menu-list/side-menu-list.component';
import { SideMenuDetailPanelComponent } from './side-menu/side-menu-detail-panel/side-menu-detail-panel.component';
import { FileExplorerComponent } from './side-menu/side-panel/file-explorer/file-explorer.component';
import { SearchComponent } from './side-menu/side-panel/search/search.component';
import { ExtensionsComponent } from './side-menu/side-panel/extensions/extensions.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuDetailPanelComponent,
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
