import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnmeldungslisteComponent } from './anmeldungsliste.component';

describe('AnmeldungslisteComponent', () => {
  let component: AnmeldungslisteComponent;
  let fixture: ComponentFixture<AnmeldungslisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnmeldungslisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnmeldungslisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
