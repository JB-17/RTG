import { Component, OnInit } from '@angular/core';
import { TopicCardInterface } from '../../shared/interface/topic-card.interface';
import { Router } from '@angular/router';
import { BaseRoutes } from '../../base.routes';
import { SubtopicCardInterface } from '../../shared/interface/subtopic-card.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topics: TopicCardInterface[] = [
    {
      title: 'social',
      img: 'https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'environment',
      img: 'https://images.unsplash.com/photo-1498925008800-019c7d59d903?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80'
    },
    {
      title: 'labor',
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'labor',
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'labor',
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  subtopics: SubtopicCardInterface[] = [
    {
      title: 'title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      title: 'title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeToView(): void {
    this.router.navigate([BaseRoutes.TOPIC]);
  }

}
