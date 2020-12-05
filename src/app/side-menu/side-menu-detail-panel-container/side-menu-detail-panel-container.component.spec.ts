import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideMenuDetailPanelContainerComponent } from './side-menu-detail-panel-container.component';

describe('SideMenuDetailPanelComponent', () => {
  let component: SideMenuDetailPanelContainerComponent;
  let fixture: ComponentFixture<SideMenuDetailPanelContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuDetailPanelContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuDetailPanelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
