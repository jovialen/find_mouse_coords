import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoBoxService {
  content$ = new BehaviorSubject<string>("");

  constructor() { }

  public clear() {
    this.content$.next("");
  }

  public setContent(content: string) {
    this.content$.next(content);
  }

  public getContent(): Observable<string> {
    return this.content$;
  }
}
