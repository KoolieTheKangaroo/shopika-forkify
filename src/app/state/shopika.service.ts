import { Injectable } from '@angular/core';
import { ListStore, ListsState } from './shopika.store';
import { tap } from 'rxjs/operators';
import { List, Item } from './shopika.model';
import { ID, update, push } from '@datorama/akita';
import { map } from 'rxjs/operators';
import storage from '../../main';


@Injectable({
  providedIn: 'root'
})
export class ShopikaService {

  constructor(private listStore: ListStore) {
  }

  addList(list: List) {
    this.listStore.add(list);
  }

  updateList(data, item, purchased) {
    this.listStore.update(data.id, list => {
    return {
      ...list,
      items: update(data.items, item,  {purchased})
    }
  });
  }

  selectList(id: ID) {
    this.listStore.setActive(id);
  }

  deleteList(id: ID) {
    this.listStore.remove(id);
  }

  setActive(id: ID) {
    this.listStore.setActive(id);
  }


}
