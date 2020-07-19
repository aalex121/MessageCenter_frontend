import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { MessageModel } from '../DataModels/messageModel';
import { MessageRequestModel } from '../DataModels/messageRequestModel';
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
  displayMessages: MessageModel[];
  displayMessagesOffset: number = 0;
  myMessages: MessageModel[];
  otherMessages: MessageModel[];
  request: MessageRequestModel;

  inputMessage: NewMessageModel;

  ngOnInit(): void {
    this.request = this.generateRequest();
    this.getMessagesToCurrentUser();
    this.inputMessage = this.generateNewMessage();
  }

  getMessagesToCurrentUser(): void {
    //TODO read current user Id from auth data
    // this.messageService.getMessagesToRecipient(this.request)
    //     .subscribe(
    //       res => this.handleResponse(res),
    //       err => alert("Error! " + err)
    //     );

    //TODO replace this with actual dialogue retrieveing mechanics
    this.messageService.getDialogue(this.request)
        .subscribe(
          res => this.handleResponse(res),
          err => alert("Error! " + err)
        );
  }

  getMessagesFromTo(): void {
    //TODO read current user Id from auth data
    this.messageService.getMessagesFromTo(this.request)
        .subscribe(
          res => this.otherMessages = res,
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

  private generateRequest(): MessageRequestModel {
    let request: MessageRequestModel = {
      messageType: 0,
      recipientId: 2,
      senderId: 1
    };    

    return request;
  }

  private handleResponse(response: MessageModel[]): void {
    this.displayMessages = response;
    //response[0].createDateAndTime.getUTCDate
  }

  //TODO Set the proper values depending on the actual dialogue
  private generateNewMessage(): NewMessageModel {
    let output: NewMessageModel = {
      id: 0,
      senderId: 2,
      typeId: MessageType.Desktop,
      createDateAndTime: undefined,
      text: "",
      recipientId: 1,
      recipientType: RecipientType.User,
      isDraft: false
    };

    return output;
  }

}
