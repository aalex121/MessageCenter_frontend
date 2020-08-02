import { Component, OnInit } from '@angular/core';
import { GroupResponseModel } from '../DataModels/groupResponseModel';
import { JoinGroupRequsetModel } from '../DataModels/joinGroupRequsetModel';
import { GroupsService } from '../groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor(private groupsService: GroupsService) { }

  //TODO Replace with actual user Id!
  userId = 2
  currentUserGroups: GroupResponseModel[];
  availableUserGroups: GroupResponseModel[];

  ngOnInit(): void {
    this.getCurrentUserGroups();
    this.getavailableUserGroups();
  }

  getCurrentUserGroups(): void {
    this.groupsService.getCurrentUserGroups(this.userId)
      .subscribe(
        res => this.currentUserGroups = res,
        err => alert("Getting Current User Groups failed!")
      )
  }

  getavailableUserGroups(): void {
    this.groupsService.getAvailableUserGroups(this.userId)
      .subscribe(
        res => this.availableUserGroups = res,
        err => alert("Geting Available User groups failed!")
      )
  }

}
