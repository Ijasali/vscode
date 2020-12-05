import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuDetailPanelComponent } from './side-menu-detail-panel.component';

describe('SideMenuDetailPanelComponent', () => {
  let component: SideMenuDetailPanelComponent;
  let fixture: ComponentFixture<SideMenuDetailPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuDetailPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuDetailPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
