import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObserverService {

  footerObserver:Subject<Boolean> = new Subject <Boolean>();
  constructor() { }
}
