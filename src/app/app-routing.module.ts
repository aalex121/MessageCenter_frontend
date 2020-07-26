import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDialogueComponent } from './user-dialogue/user-dialogue.component';
import { MessagingComponent } from './messaging/messaging.component';
import { GroupsComponent } from './groups/groups.component';
import { CreateUserGroupComponent } from './create-user-group/create-user-group.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'userDialogue', component: UserDialogueComponent},
  { path: 'messaging', component: MessagingComponent },
  { path: 'groups', component: GroupsComponent},
  { path: 'createGroup', component: CreateUserGroupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
