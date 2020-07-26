import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { MessageResponseModel } from '../DataModels/messageResponseModel';
import { UserMessageRequestModel } from '../DataModels/userMessageRequestModel';
import { NewMessageModel } from '../DataModels/newMessageModel';
import { MessageType } from '../Enums/messageType';
import { RecipientType } from '../Enums/recipientType';


@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  displayMessageLimit: number = 10;
  displayMessages: MessageResponseModel[];
  displayMessagesOffset: number = 0;  

  //TODO Fill with actual values!
  getMessagesRequest: UserMessageRequestModel = {
    messageType: 0,
    currentUserId: 2,
    collocutorId: 1,
    offset: 0
  };

  inputMessage: NewMessageModel = {
    id: 0,
    senderId: 2,
    typeId: MessageType.Desktop,
    createDateAndTime: undefined,
    text: "",
    recipientId: 1,
    recipientType: RecipientType.User,
    isDraft: false
  };

  ngOnInit(): void {    
    this.getDialogue();    
  }  

  getDialogue(): void {
    //TODO read current user Id from auth data
    this.messageService.getUserDialogue(this.getMessagesRequest)
        .subscribe(
          res => this.displayMessages = res,
          err => alert("Error! " + err)
        );
  }

  sendNewMessage(): void {
    if (!this.inputMessage.text) {
      alert("Don't send empy messages please!");
      return;
    }

    this.messageService.sendMessage(this.inputMessage)
    .subscribe(
      res => this.inputMessage.id = res,
      err => alert("Error in sending new Message!")
    );
    this.inputMessage.text = "";
  }    
}
