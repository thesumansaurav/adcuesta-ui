import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvasComponent } from './mvas.component';

describe('MvasComponent', () => {
  let component: MvasComponent;
  let fixture: ComponentFixture<MvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
