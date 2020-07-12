import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { MessageModel } from '../DataModels/messageModel';


@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  displayMessages: MessageModel[];

  ngOnInit(): void {
  }

  getMessagesToCurrentUser(): void {
    //TODO read current user Id from auth data
    this.messageService.getMessagesTouser(2)
        .subscribe(
          res => this.displayMessages = res,
          err => alert("Fuck :( " + err)
        );
  }

}
