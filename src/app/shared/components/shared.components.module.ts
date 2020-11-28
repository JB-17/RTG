import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TopicCardComponent } from './topic-card/topic-card.component';

const components = [
  AppLayoutComponent,
  AuthLayoutComponent,
  HeaderComponent,
  TopicCardComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: components
})
export class SharedComponentsModule { }
