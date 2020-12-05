import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EditorComponent } from './editor.component';
import { By } from '@angular/platform-browser';
import { Store } from '../shared/store/store.service';


describe('EditorComponent', () => {
  let component: EditorComponent;
  let fixture: ComponentFixture<EditorComponent>;
  let store: Store;
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ EditorComponent ],
      providers: [Store],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open a tab whenever a value is being emited from store', () => {
    const file = {id: 1, name: 'test.html', content: 'test'};
    store.openFile(file);
    expect(component.tabs).toContain(file);
  });

  it('should activate the file tab, when trying to open a file which is already opened', () => {

    const file1 = {id: 1, name: 'test1.html', content: 'test1'};
    const file2 = {id: 2, name: 'test2.html', content: 'test2'};
    store.openFile(file1);
    store.openFile(file2);
    store.openFile(file1);
    const pos = component.tabs.findIndex(x => x.id === 1);
    expect(component.selectedTab).toBe(pos);
  });

  it('should remove the tab when close method is called', () => {
    const file1 = {id: 1, name: 'test1.html', content: 'test1'};
    const file2 = {id: 2, name: 'test2.html', content: 'test2'};
    store.openFile(file1);
    store.openFile(file2);
    component.closeTab(0);
    expect(component.tabs).not.toContain(file1);
    component.closeTab(0);
    expect(component.tabs).not.toContain(file2);


  });
});
