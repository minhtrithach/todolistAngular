import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { TodoFeatureStore, TodoFeatureState } from './todo-feature.store';

@Injectable({ providedIn: 'root' })
export class TodoFeatureQuery extends Query<TodoFeatureState> {

  constructor(protected override store: TodoFeatureStore) {
    super(store);
  }

}
