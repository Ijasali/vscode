import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {FileExplorerViewModel, FileViewModel} from '../models/directory.model';
import { fakeFileExplorer } from './fake-data';
@Injectable({
  providedIn: 'root'
})
export class Store {

  // tslint:disable-next-line: variable-name
  private _openFileSubject = new Subject<FileViewModel>();
  openFileSubject$ = this._openFileSubject.asObservable();


  fileExplorerData: FileExplorerViewModel[] = fakeFileExplorer();
  constructor() {}

  loadFileExplorer(): FileExplorerViewModel[]  {
    return this.fileExplorerData;
  }

  openFile(file: FileViewModel): void {
    this._openFileSubject.next(file);
  }
}

