import { NestedTreeControl } from '@angular/cdk/tree';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { noop } from 'rxjs';
import { FileViewModel } from 'src/app/shared/models/directory.model';
import { Store } from 'src/app/shared/store/store.service';

import { FileExplorerComponent } from './file-explorer.component';

describe('FileExplorerComponent', () => {
  let component: FileExplorerComponent;
  let fixture: ComponentFixture<FileExplorerComponent>;
  let store: Store;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileExplorerComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [Store]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileExplorerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the file when the file name is double clicked', () => {
    const file1 = {id: 1, name: 'test1.html', content: 'test1'};
    const spyOpen = spyOn(store, 'openFile').and.returnValue();
    component.fileClicked(file1);
    expect(store.openFile).toHaveBeenCalled();

  });
});
