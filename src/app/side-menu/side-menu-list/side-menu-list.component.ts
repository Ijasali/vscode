import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavmenuEnum } from 'src/app/shared/models/directory.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'side-menu-list',
  templateUrl: './side-menu-list.component.html',
  styleUrls: ['./side-menu-list.component.scss']
})
export class SideMenuListComponent implements OnInit {

  NavmenuEnum = NavmenuEnum;
  @Output()
  menuChange = new EventEmitter<NavmenuEnum | undefined>();
  lastItemClicked!: NavmenuEnum | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  // when a menu item is clicked it emits the item. if the same icon is clicked twice, emits undefined
  itemClicked(item: NavmenuEnum): void {
    if ( this.lastItemClicked !== item) {
      this.lastItemClicked = item;
    } else {
      this.lastItemClicked = undefined;
    }
    this.menuChange.next(this.lastItemClicked);
  }
}
