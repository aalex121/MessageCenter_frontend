import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewGroupModel } from './DataModels/newGroupModel';
import { GroupResponseModel } from './DataModels/groupResponseModel';
import { JoinGroupRequsetModel } from './DataModels/joinGroupRequsetModel';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http:HttpClient) { }

  private groupsApiUrl = "https://localhost:44321/api/userGroups";

  getCurrentUserGroups(userId: number): Observable<GroupResponseModel[]> {
    let requestUrl = this.groupsApiUrl + "/SearchByUserId/" + userId;

    return this.http.get<GroupResponseModel[]>(requestUrl);
  }

  getAvailableUserGroups(userId: number): Observable<GroupResponseModel[]> {
    let requestUrl = this.groupsApiUrl + "/GetAvailableUserGroups/" + userId;

    return this.http.get<GroupResponseModel[]>(requestUrl);
  }
  
  searchGroups(name: string): Observable<GroupResponseModel[]> {
    let requestUrl = this.groupsApiUrl + "/SearchByName/" + name;

    return this.http.get<GroupResponseModel[]>(requestUrl);
  }

  getGroupById(groupId: number): Observable<GroupResponseModel> {
    let requestUrl = this.groupsApiUrl + "/" + groupId;

    return this.http.get<GroupResponseModel>(requestUrl);
  }

  newGroup(requsetData: NewGroupModel): Observable<GroupResponseModel> {
    return this.http.post<GroupResponseModel>(this.groupsApiUrl, requsetData);
  }

  addUserToGroup(requestData: JoinGroupRequsetModel): Observable<boolean> {
    let requestUrl = this.groupsApiUrl + "/JoinGroup";

    return this.http.post<boolean>(requestUrl, requestData);
  }

  renameGroup(requestData: GroupResponseModel): Observable<GroupResponseModel> {
    let requestUrl = this.groupsApiUrl + "/RenameGroup";

    return this.http.post<GroupResponseModel>(requestUrl, requestData);
  }

}
