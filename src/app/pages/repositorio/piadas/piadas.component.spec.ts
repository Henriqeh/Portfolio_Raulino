import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiadasComponent } from './piadas.component';

describe('PiadasComponent', () => {
  let component: PiadasComponent;
  let fixture: ComponentFixture<PiadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PiadasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
