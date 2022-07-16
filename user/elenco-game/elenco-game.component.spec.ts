import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoGameComponent } from './elenco-game.component';

describe('ElencoGameComponent', () => {
  let component: ElencoGameComponent;
  let fixture: ComponentFixture<ElencoGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElencoGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
