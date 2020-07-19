import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from './login-model';
import { MessageRequestModel } from './DataModels/messageRequestModel';
import { MessageModel } from './DataModels/messageModel';
import { NewMessageModel } from './DataModels/newMessageModel';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  private messageApiUrl: string = "https://localhost:44321/api/messages";   

  getMessagesToRecipient(requestData: MessageRequestModel): Observable<MessageModel[]> {
    let requestUrl: string = this.messageApiUrl + "/GetByRecipient";

    return this.http.post<MessageModel[]>(requestUrl, requestData);
  }

  getMessagesFromTo(requestData: MessageRequestModel): Observable<MessageModel[]> {
    let requestUrl: string = this.messageApiUrl + "/GetFromTo";

    return this.http.post<MessageModel[]>(requestUrl, requestData);
  }

  getDialogue(requestData: MessageRequestModel): Observable<MessageModel[]> {
    let requestUrl: string = this.messageApiUrl + "/GetDialogue";

    return this.http.post<MessageModel[]>(requestUrl, requestData);
  }

  sendMessage(message: NewMessageModel): Observable<number> {
    let requestUrl = this.messageApiUrl;
    alert("MessageService.SendMessage");

    return this.http.post<number>(requestUrl, message);
  }

}
