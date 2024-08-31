import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AppConstantService } from '../../app-constant.service';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.scss'
})
export class BlogDetailsComponent implements AfterViewInit{
  @ViewChild('sourceDiv') sourceDiv!: ElementRef;
  @ViewChild('targetDiv') targetDiv!: ElementRef;

  constructor(
    private title: Title,
    private meta : Meta,
    private appConstant: AppConstantService
  ){
    this.title.setTitle(this.appConstant.SEODATA.BLOG_DETAILS.title);
    this.meta.updateTag({name: 'description', content: this.appConstant.SEODATA.BLOG_DETAILS.description});
  }

  ngAfterViewInit(): void {
    // Get the height of the sourceDiv
    const sourceHeight = this.sourceDiv.nativeElement.offsetHeight;
    
    // Set the height of the targetDiv to be less than the sourceDiv (e.g., 10px less)
    this.targetDiv.nativeElement.style.height = (sourceHeight - 0) + 'px';
  }
}
