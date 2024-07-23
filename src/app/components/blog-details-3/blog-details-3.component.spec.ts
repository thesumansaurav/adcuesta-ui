import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetails3Component } from './blog-details-3.component';

describe('BlogDetails3Component', () => {
  let component: BlogDetails3Component;
  let fixture: ComponentFixture<BlogDetails3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetails3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetails3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
