import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SubtopicCardInterface } from '../../interface/subtopic-card.interface';

@Component({
  selector: 'app-subtopic-card',
  templateUrl: './subtopic-card.component.html',
  styleUrls: ['./subtopic-card.component.scss']
})
export class SubtopicCardComponent implements OnInit {
  @Input() item: SubtopicCardInterface;
  @Output() routeToSubtopic: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  route(): void {
    this.routeToSubtopic.emit();
  }

}
