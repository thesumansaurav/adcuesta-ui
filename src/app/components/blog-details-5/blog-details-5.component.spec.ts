import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetails5Component } from './blog-details-5.component';

describe('BlogDetails5Component', () => {
  let component: BlogDetails5Component;
  let fixture: ComponentFixture<BlogDetails5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetails5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetails5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
