import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AppConstantService } from '../../app-constant.service';

@Component({
  selector: 'app-blog-details-4',
  standalone: true,
  imports: [],
  templateUrl: './blog-details-4.component.html',
  styleUrl: './blog-details-4.component.scss'
})
export class BlogDetails4Component {

  constructor(
    private title: Title,
    private meta : Meta,
    private appConstant: AppConstantService
  ){
    this.title.setTitle(this.appConstant.SEODATA.BLOG_DETAILS4.title);
    this.meta.updateTag({name: 'description', content: this.appConstant.SEODATA.BLOG_DETAILS4.description});
  }

}
