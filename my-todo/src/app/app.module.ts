import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NbThemeModule, NbLayoutModule, NbSidebarModule,NbInputModule,   NbCardModule, NbDatepickerModule, NbButtonModule, NbListModule, NbDialogModule,} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoFeatureComponent } from './todo-feature/todo-feature.component';
import { TodoItemComponent } from './todo-feature/todo-item/todo-item.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { TodoItemUpdationComponent} from './todo-feature/todo-item-updation/todo-item-updation.component';
import { TodoItemAdditionComponent } from './todo-feature/todo-item-addition/todo-item-addition.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoFeatureComponent,
    TodoItemComponent,
    TodoItemUpdationComponent,
    TodoItemAdditionComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDatepickerModule,
    NbLayoutModule,
    NbSidebarModule,
    NbInputModule,
    NbButtonModule,
    FormsModule,
    NbListModule,
    NbCardModule,
    NbDialogModule.forRoot(),
    NbDialogModule,
    NgbModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule
  ],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
