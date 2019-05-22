import { Component, OnInit, Input } from '@angular/core';

import { Todo } from './../../classes/Todo';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})

export class BodyComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit() { }

}
