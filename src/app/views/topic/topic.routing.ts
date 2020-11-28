import { Routes } from '@angular/router';
import { TopicComponent } from './topic.component';
import { TopicResolver } from './topic.resolver';

export const TopicRoutes: Routes = [
  { path: '', component: TopicComponent, resolve: {data: TopicResolver}  }
];
