import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetails7Component } from './blog-details-7.component';

describe('BlogDetails7Component', () => {
  let component: BlogDetails7Component;
  let fixture: ComponentFixture<BlogDetails7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetails7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetails7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
