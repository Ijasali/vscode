import { Component,  Input,  OnInit, TemplateRef } from '@angular/core';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'side-menu-detail-panel',
  templateUrl: './side-menu-detail-panel.component.html',
  styleUrls: ['./side-menu-detail-panel.component.scss']
})
export class SideMenuDetailPanelComponent implements OnInit {

  @Input() template!: TemplateRef<any>;
  constructor() {

  }

  ngOnInit(): void {
  }

}
