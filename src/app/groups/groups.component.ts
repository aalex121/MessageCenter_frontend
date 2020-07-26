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

  currentUserGroups: GroupResponseModel[];
  availableUserGroups: GroupResponseModel[];

  ngOnInit(): void {
  }

}
