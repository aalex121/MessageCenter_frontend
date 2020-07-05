import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDialogueComponent } from './user-dialogue.component';

describe('UserDialogueComponent', () => {
  let component: UserDialogueComponent;
  let fixture: ComponentFixture<UserDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
