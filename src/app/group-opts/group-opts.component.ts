import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GroupsService } from '../groups.service';
import { GroupResponseModel } from '../DataModels/groupResponseModel';
import { JoinGroupRequsetModel } from '../DataModels/joinGroupRequsetModel';
import { JoinGroupAttemptResults } from '../Enums/joinGroupAttemptResults';
import { UserData } from '../DataModels/userData';
import { AuthService } from '../auth.service';
import { AuthResponse } from '../auth-response';

@Component({
  selector: 'app-group-opts',
  templateUrl: './group-opts.component.html',
  styleUrls: ['./group-opts.component.css']
})
export class GroupOptsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private groupsService: GroupsService,
    private authService: AuthService,
    private location: Location
  ) { }

  private groupId: number;
  currentGroup: GroupResponseModel;
  currentUser: AuthResponse;
  groupMembers: UserData[];
  groupAdmins: UserData[];
  isGroupMember: boolean;

  ngOnInit(): void {
    this.groupId = +this.route.snapshot.paramMap.get('id');
    this.currentUser = this.authService.currentUser;
    this.getCurrentGroupData();
  }  

  joinGroup(): void {    
    const request: JoinGroupRequsetModel = {
      userId: 2, //TODO put an actual userId here!
      groupId: this.groupId       
    };

    this.groupsService.addUserToGroup(request)
      .subscribe(
        res => this.handleJoinGroup(res),
        err => alert("Join Group - Server error!")
      );
  }

  private getCurrentGroupData(): void {
    this.groupsService.getGroupById(this.groupId)
      .subscribe(
        res => this.handleGroupDataResponse(res),
        err => alert("Group retreival failed!")
      );
  }  

  private handleGroupDataResponse(response: GroupResponseModel) {
    if(!response) {
      return;
    }

    this.currentGroup = response;
    this.getGroupMembers(response);
    this.getGroupAdmins(response);
    this.isGroupMemberCheck(response);
  }

  private getGroupMembers(group: GroupResponseModel): void {    
    this.groupsService.getGroupMembers(group.id)
      .subscribe(
        res => this.groupMembers = res,
        err => alert("Retriebing Group Members - Server Error!")
      );
  }

  private getGroupAdmins(group: GroupResponseModel): void {    
    this.groupsService.getGroupAdmins(group.id)
      .subscribe(
        res => this.groupAdmins = res,
        err => alert("Retrieving Group Admiins - Server Error!")
      );
  }
  
  private isGroupMemberCheck(group: GroupResponseModel): void {
    if(!this.currentUser || !this.groupMembers) {
      return;
    }

    let currentUserId: number = this.currentUser.userId;

    for (let i = 0; i < this.groupMembers.length; i++) {
      if (this.groupMembers[i].id === this.currentUser.userId) {
        this.isGroupMember = true;
        break;
      }      
    }
  }

  private handleJoinGroup(response: JoinGroupAttemptResults): void {
    switch(response) {
      case JoinGroupAttemptResults.Success:
        alert("Success!");
        this.getCurrentGroupData();
        break;
      case JoinGroupAttemptResults.AlreadyInGroup:
        alert("You are there already!");
        break;
      case JoinGroupAttemptResults.GroupNotFound:
        alert("Group not found!");
        break;
    }
  }
}
