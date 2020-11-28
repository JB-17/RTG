import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routing';
import { SharedComponentsModule } from '../../shared/components/shared.components.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    SharedComponentsModule,
    ScrollingModule,
  ]
})
export class HomeModule { }
