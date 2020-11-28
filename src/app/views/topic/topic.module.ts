import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicComponent } from './topic.component';
import { RouterModule } from '@angular/router';
import { TopicRoutes } from './topic.routing';
import { TopicResolver } from './topic.resolver';

@NgModule({
  declarations: [TopicComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(TopicRoutes),
  ],
  providers: [TopicResolver]
})
export class TopicModule { }
