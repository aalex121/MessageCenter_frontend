import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupOptsComponent } from './group-opts.component';

describe('GroupOptsComponent', () => {
  let component: GroupOptsComponent;
  let fixture: ComponentFixture<GroupOptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupOptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupOptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
