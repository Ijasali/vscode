import { Component,  Input,  OnInit, TemplateRef } from '@angular/core';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'side-menu-detail-panel-container',
  templateUrl: './side-menu-detail-panel-container.component.html',
  styleUrls: ['./side-menu-detail-panel-container.component.scss']
})
export class SideMenuDetailPanelContainerComponent implements OnInit {

  @Input() template!: TemplateRef<any>;
  constructor() {}

  ngOnInit(): void {
  }

}
