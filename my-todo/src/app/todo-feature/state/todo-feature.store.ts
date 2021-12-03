import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface TodoFeatureState {
   key: string;
}

export function createInitialState(): TodoFeatureState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'todo-feature' })
export class TodoFeatureStore extends Store<TodoFeatureState> {

  constructor() {
    super(createInitialState());
  }

}
