import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserCreatedComponent } from './new-user-created.component';

describe('NewUserCreatedComponent', () => {
  let component: NewUserCreatedComponent;
  let fixture: ComponentFixture<NewUserCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUserCreatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
