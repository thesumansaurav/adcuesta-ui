import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog9Component } from './blog9.component';

describe('Blog9Component', () => {
  let component: Blog9Component;
  let fixture: ComponentFixture<Blog9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blog9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blog9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
