import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavmenuEnum } from 'src/app/shared/models/directory.model';
import { SideMenuListComponent } from './side-menu-list.component';

describe('SideMenuListComponent', () => {
  let component: SideMenuListComponent;
  let fixture: ComponentFixture<SideMenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuListComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the menu type corresponding to what is clicked', () => {
    const button = fixture.debugElement.query(By.css('.icons'));
    button.triggerEventHandler('click', NavmenuEnum.Explorer);
    let itemClicked: NavmenuEnum;
    component.menuChange.subscribe((x: NavmenuEnum) => itemClicked = x );
    expect(component.lastItemClicked).toBe( NavmenuEnum.Explorer);
  });

  it('should emit undefined if the same menu is clicked twice', () => {
    const button = fixture.debugElement.query(By.css('.icons'));
    button.triggerEventHandler('click', NavmenuEnum.Explorer);
    button.triggerEventHandler('click', NavmenuEnum.Explorer);
    let itemClicked: NavmenuEnum;
    component.menuChange.subscribe((x: NavmenuEnum) => itemClicked = x );
    expect(component.lastItemClicked).toBeUndefined();
  });

});
