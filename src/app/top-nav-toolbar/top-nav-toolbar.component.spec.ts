import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavToolbarComponent } from './top-nav-toolbar.component';

describe('TopNavToolbarComponent', () => {
  let component: TopNavToolbarComponent;
  let fixture: ComponentFixture<TopNavToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNavToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
