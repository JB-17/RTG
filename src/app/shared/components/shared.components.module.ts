import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TopicCardComponent } from './topic-card/topic-card.component';
import { SubtopicCardComponent } from './subtopic-card/subtopic-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const components = [
  AppLayoutComponent,
  AuthLayoutComponent,
  HeaderComponent,
  TopicCardComponent,
  SubtopicCardComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: components
})
export class SharedComponentsModule { }
