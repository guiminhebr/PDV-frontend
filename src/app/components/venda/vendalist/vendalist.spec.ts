import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vendalist } from './vendalist';

describe('Vendalist', () => {
  let component: Vendalist;
  let fixture: ComponentFixture<Vendalist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vendalist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vendalist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
