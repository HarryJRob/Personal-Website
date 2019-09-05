import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleTileComponent } from './title-tile.component';

describe('TitleTileComponent', () => {
  let component: TitleTileComponent;
  let fixture: ComponentFixture<TitleTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
