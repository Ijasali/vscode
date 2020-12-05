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
  menuChange = new EventEmitter<NavmenuEnum>();

  constructor() { }

  ngOnInit(): void {
  }

  itemClicked(item: NavmenuEnum): void {
    this.menuChange.next(item);
  }
}
