import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TopicCardInterface } from '../../interface/topic-card.interface';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss']
})
export class TopicCardComponent implements OnInit {
  @Input() item: TopicCardInterface;
  @Output() routeToTopic: EventEmitter<null> = new EventEmitter<null>();

  constructor() { }

  ngOnInit(): void {
  }

  route() {
    this.routeToTopic.emit();
  }

}
