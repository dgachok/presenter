import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Message} from "../../interfaces/message";

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss']
})
export class ConsumerComponent implements OnInit {
  @Input() messages: Array<Message>;
  @Input() selectedMessage: Message;
  @Output() selectMessageChange = new EventEmitter<Message>();

  constructor() {
  }

  ngOnInit() {
  }

  selectMessage(message: Message) {
    this.selectMessageChange.emit(message);
  }

}
