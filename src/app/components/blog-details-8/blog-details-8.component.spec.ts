import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetails8Component } from './blog-details-8.component';

describe('BlogDetails8Component', () => {
  let component: BlogDetails8Component;
  let fixture: ComponentFixture<BlogDetails8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetails8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetails8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
