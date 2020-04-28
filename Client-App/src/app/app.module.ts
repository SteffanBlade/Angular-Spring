import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuizzComponent } from './quizz/quizz.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

const appRoutes: Routes = [
  {
    path: 'quizz',
    component: QuizzComponent,
  },
  {
    path: '',
    component: QuizzComponent,
    pathMatch: 'full',
  },
  {
    path: 'AddQuestion',
    component: AddQuestionComponent,
  },
  {
    path: '**',
    component: QuizzComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    QuizzComponent,
    AddQuestionComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
