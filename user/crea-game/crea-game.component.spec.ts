import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaGameComponent } from './crea-game.component';

describe('CreaGameComponent', () => {
  let component: CreaGameComponent;
  let fixture: ComponentFixture<CreaGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
