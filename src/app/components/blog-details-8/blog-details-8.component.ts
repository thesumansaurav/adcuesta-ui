import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AppConstantService } from '../../app-constant.service';

@Component({
  selector: 'app-blog-details-8',
  standalone: true,
  imports: [],
  templateUrl: './blog-details-8.component.html',
  styleUrl: './blog-details-8.component.scss'
})
export class BlogDetails8Component {
  
  constructor(
    private title: Title,
    private meta : Meta,
    private appConstant: AppConstantService
  ){
    this.title.setTitle(this.appConstant.SEODATA.BLOG_DETAILS8.title);
    this.meta.updateTag({name: 'description', content: this.appConstant.SEODATA.BLOG_DETAILS8.description});
  }
}
