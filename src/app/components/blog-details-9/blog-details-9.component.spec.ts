import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetails9Component } from './blog-details-9.component';

describe('BlogDetails9Component', () => {
  let component: BlogDetails9Component;
  let fixture: ComponentFixture<BlogDetails9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetails9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetails9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
