import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetails6Component } from './blog-details-6.component';

describe('BlogDetails6Component', () => {
  let component: BlogDetails6Component;
  let fixture: ComponentFixture<BlogDetails6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetails6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetails6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
