import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachComponent } from './reach.component';

describe('ReachComponent', () => {
  let component: ReachComponent;
  let fixture: ComponentFixture<ReachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReachComponent]
    });
    fixture = TestBed.createComponent(ReachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
