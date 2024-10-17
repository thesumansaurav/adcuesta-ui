import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog1Component } from './blog-1.component';

describe('Blog1Component', () => {
  let component: Blog1Component;
  let fixture: ComponentFixture<Blog1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blog1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
