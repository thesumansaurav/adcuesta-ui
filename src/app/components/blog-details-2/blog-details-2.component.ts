import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppConstantService } from '../../app-constant.service';

@Component({
  selector: 'app-blog-details-2',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './blog-details-2.component.html',
  styleUrl: './blog-details-2.component.scss'
})
export class BlogDetails2Component {

  constructor(
    private title: Title,
    private meta : Meta,
    private appConstant: AppConstantService
  ){
    this.title.setTitle(this.appConstant.SEODATA.BLOG_DETAILS2.title);
    this.meta.updateTag({name: 'description', content: this.appConstant.SEODATA.BLOG_DETAILS2.description});
  }

}
