import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TopicCardInterface } from '../../interface/topic-card.interface';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss']
})
export class TopicCardComponent implements OnInit {
  @Input() item: TopicCardInterface;
  @Output() routeToTopic: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  route(): void {
    this.routeToTopic.emit();
  }

}
