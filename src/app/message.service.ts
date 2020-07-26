import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from './login-model';
import { UserMessageRequestModel } from './DataModels/userMessageRequestModel';
import { MessageResponseModel } from './DataModels/messageResponseModel';
import { NewMessageModel } from './DataModels/newMessageModel';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  private messageApiUrl: string = "https://localhost:44321/api/messages";   

  getMessagesToRecipient(requestData: UserMessageRequestModel): Observable<MessageResponseModel[]> {
    let requestUrl: string = this.messageApiUrl + "/GetByRecipient";

    return this.http.post<MessageResponseModel[]>(requestUrl, requestData);
  }  

  getUserDialogue(requestData: UserMessageRequestModel): Observable<MessageResponseModel[]> {
    let requestUrl: string = this.messageApiUrl + "/GetUserDialogue";

    return this.http.post<MessageResponseModel[]>(requestUrl, requestData);
  }

  getGroupMessages(requestData: UserMessageRequestModel): Observable<MessageResponseModel[]> {
    let requestUrl: string = this.messageApiUrl + "/GetGroupMessages";

    return this.http.post<MessageResponseModel[]>(requestUrl, requestData);
  }

  sendMessage(message: NewMessageModel): Observable<number> {
    let requestUrl = this.messageApiUrl;
    alert("MessageService.SendMessage");

    return this.http.post<number>(requestUrl, message);
  }

}
