import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppConstantService } from '../../app-constant.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

  constructor(
    private title: Title,
    private meta : Meta,
    private appConstant: AppConstantService
  ){
    this.title.setTitle(this.appConstant.SEODATA.BLOG.title);
    this.meta.updateTag({name: 'description', content: this.appConstant.SEODATA.BLOG.description});
  }

}
