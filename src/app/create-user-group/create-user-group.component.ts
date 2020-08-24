import { Component, OnInit } from '@angular/core';
import { GroupResponseModel } from '../DataModels/groupResponseModel';
import { JoinGroupRequsetModel } from '../DataModels/joinGroupRequsetModel';
import { NewGroupModel } from '../DataModels/newGroupModel';
import { GroupsService } from '../groups.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-create-user-group',
  templateUrl: './create-user-group.component.html',
  styleUrls: ['./create-user-group.component.css']
})
export class CreateUserGroupComponent implements OnInit {

  constructor(private groupsService: GroupsService) { }

  //TODO Add current user id!
  newGroupRequest: NewGroupModel = {
    groupName: "",
    creatorId: 2
  };
  
  newGroupResponse: GroupResponseModel;

  ngOnInit(): void {
  }

  createGroup(): void {
    this.groupsService.newGroup(this.newGroupRequest).
      subscribe(
        res => this.newGroupResponse = res,
        err => alert("Create new Group - Server error!")
      );
  }


}
