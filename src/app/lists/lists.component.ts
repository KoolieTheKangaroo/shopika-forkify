import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ListQuery, List } from '../state';
import { Observable } from 'rxjs';
import { ShopikaService } from '../state/shopika.service';
import { ID } from '@datorama/akita';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListsComponent implements OnInit {
  lists$: Observable<List[]>;
  newListRequest: boolean;

  constructor(
    private listQuery: ListQuery,
    private shopikaService: ShopikaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.lists$ = this.listQuery.selectAll();
  }

  select(id: ID) {
    this.shopikaService.setActive(id);
    this.router.navigate(['lists/edit']);
  }
  delete(id: ID) {
    this.shopikaService.deleteList(id);
  }
} 