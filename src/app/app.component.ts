import {Component, OnInit, OnDestroy} from '@angular/core';
import {AppService} from "./services/app.service";
import {Message} from "./interfaces/message";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  messages: Array<Message>;
  selectedMessage: Message;
  messagesSubscription: Subscription;
  submitMessageSubscription: Subscription;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.messagesSubscription = this.appService.loadMessages()
      .subscribe((messages: Array<Message>) => {
        if (messages.length) {
          this.selectedMessage = messages[0];
        }
        this.messages = messages;
      });
  }

  selectMessage(message: Message) {
    this.selectedMessage = message;
  }

  submitMessage(message: Message) {
    this.submitMessageSubscription = this.appService.updateMessageById(message)
      .switchMap(() => this.appService.loadMessages())
      .subscribe((messages: Array<Message>) => this.messages = messages);
  }

  ngOnDestroy() {
    if (this.submitMessageSubscription) {
      this.submitMessageSubscription.unsubscribe();
    }
    this.messagesSubscription.unsubscribe();
  }
}
