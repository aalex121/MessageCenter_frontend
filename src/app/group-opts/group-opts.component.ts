import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GroupsService } from '../groups.service';
import { GroupResponseModel } from '../DataModels/groupResponseModel';

@Component({
  selector: 'app-group-opts',
  templateUrl: './group-opts.component.html',
  styleUrls: ['./group-opts.component.css']
})
export class GroupOptsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private groupsService: GroupsService,
    private location: Location
  ) { }

  currentGroup: GroupResponseModel;

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.groupsService.getGroupById(id)
      .subscribe(
        res => this.currentGroup = res,
        err => alert("Group retreiva failed!")
      );
  }

    

}
