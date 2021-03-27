import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ListStore, ListsState } from './shopika.store';
import { List, Item } from './shopika.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListQuery extends QueryEntity<ListsState, List> {

  constructor(protected store: ListStore) {
    super(store);
  }

}

