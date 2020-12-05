import {Component, QueryList, ViewChildren, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { FileViewModel } from '../shared/models/directory.model';
import { Store } from '../shared/store/store.service';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit {

  public selectedTab = 1;
  public tabs: FileViewModel[] = [];
  constructor(private store: Store) {}
  ngOnInit(): void {

    // Whenever the user DOUBLE Clicks on a file, it will be added to the tab groups
    this.store.openFileSubject$.subscribe(f => {
      const tabIndex = this.tabs.findIndex(x => x.id === f.id);
      if (tabIndex === -1) {
        const newTabIndex = this.tabs.push(f);
        this.selectedTab = newTabIndex;
      } else {
        this.selectedTab = tabIndex;
      }
    });
  }

  closeTab(index: number): void {
    this.tabs.splice(index, 1);
  }

}
