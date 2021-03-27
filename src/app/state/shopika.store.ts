import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, getInitialActiveState, ActiveState } from '@datorama/akita';
import { List, Item } from './shopika.model';
import { push } from '@datorama/akita';

export interface ListsState extends EntityState<List>, ActiveState { }


const initialState = {
  ...getInitialActiveState()
};

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'lists' })
export class ListStore extends EntityStore<ListsState, List> {
  constructor() {
    super(initialState);
  }
}
