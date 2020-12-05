import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { FileExplorerViewModel, FileViewModel } from 'src/app/shared/models/directory.model';
import { Store } from 'src/app/shared/store/store.service';

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.scss']
})
export class FileExplorerComponent implements OnInit {


  treeControl = new NestedTreeControl<FileExplorerViewModel>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FileExplorerViewModel>();
  constructor(private store: Store) {
    this.dataSource.data = this.store.loadFileExplorer();
  }

  ngOnInit(): void {}

  fileClicked(file: FileViewModel): void {
    this.store.openFile(file);
  }

  hasChild = (_: number, node: FileExplorerViewModel) => !!node.children && node.children.length > 0;
}
