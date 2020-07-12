import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from './login-model';
import { MessageModel } from './DataModels/messageModel';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  private messageApiUrl: string = "https://localhost:44321/api/messages";   

  getMessagesTouser(userId: number): Observable<MessageModel[]> {
    let requestUrl: string = this.messageApiUrl + "/GetToUser/" + userId;
    return this.http.get<MessageModel[]>(requestUrl);
  }

}
