import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { TodoFeatureStore } from './todo-feature.store';

@Injectable({ providedIn: 'root' })
export class TodoFeatureService {

  constructor(private todoFeatureStore: TodoFeatureStore, private http: HttpClient) {
  }


}
