import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDrawerToggleResult, MatSidenav } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavmenuEnum } from './shared/models/directory.model';
import { ExtensionsComponent } from './side-menu/side-menu-detailed-panels/extensions/extensions.component';
import { FileExplorerComponent } from './side-menu/side-menu-detailed-panels/file-explorer/file-explorer.component';
import { SearchComponent } from './side-menu/side-menu-detailed-panels/search/search.component';


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  });

  beforeEach(() => {
     fixture = TestBed.createComponent(AppComponent);
     app = fixture.componentInstance;
     app.menuSidenav =  TestBed.createComponent(MatSidenav).componentInstance;
     app.fileExplorer =  TestBed.createComponent(FileExplorerComponent).componentInstance;
     app.extensions =  TestBed.createComponent(ExtensionsComponent).componentInstance;
     app.search =  TestBed.createComponent(SearchComponent).componentInstance;
     fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'vscode'`, () => {
    expect(app.title).toEqual('vscode');
  });

  it('should open file explorer, when menuChange() is being called with an argument Explorer  ', () => {
    const spyOpen = spyOn(app.menuSidenav, 'open').and.callFake( () => {
      return new Promise<MatDrawerToggleResult>((res, rej) => res('open'));
    });
    app.menuChange(NavmenuEnum.Explorer);
    fixture.detectChanges();
    expect(app.presentlyOpenedMenu).toBe(app.fileExplorer);
    expect(spyOpen).toHaveBeenCalled();
  });


  it('should open search, when menuChange() is called with an argument Search ', () => {
    const spyOpen = spyOn(app.menuSidenav, 'open').and.callFake( () => {
      return new Promise<MatDrawerToggleResult>((res, rej) => res('open'));
    });
    app.menuChange(NavmenuEnum.Search);
    fixture.detectChanges();
    expect(app.presentlyOpenedMenu).toBe(app.search);
    expect(spyOpen).toHaveBeenCalled();
  });

  it('should open Extensions, when menuChange() is called with an argument Extensions  ', () => {
    const spyOpen = spyOn(app.menuSidenav, 'open').and.callFake( () => {
      return new Promise<MatDrawerToggleResult>((res, rej) => res('open'));
    });
    app.menuChange(NavmenuEnum.Extensions);
    fixture.detectChanges();
    expect(app.presentlyOpenedMenu).toBe(app.extensions);
    expect(spyOpen).toHaveBeenCalled();

  });

  it('should close the panel when menuChange() is called with undefined', () => {

     const spyClose = spyOn(app.menuSidenav, 'close').and.callFake( () => {
       return new Promise<MatDrawerToggleResult>((res, rej) => res('close'));
     });
     app.menuChange(undefined);
     expect(app.presentlyOpenedMenu).toBeNull();
     expect(spyClose).toHaveBeenCalled();
  });


});
