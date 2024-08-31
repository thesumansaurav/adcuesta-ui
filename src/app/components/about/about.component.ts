import { Component } from '@angular/core';
import { AppConstantService } from '../../app-constant.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  constructor(
    private title: Title,
    private meta : Meta,
    private appConstant: AppConstantService
  ){
    this.title.setTitle(this.appConstant.SEODATA.ABOUT.title);
    this.meta.updateTag({name: 'description', content: this.appConstant.SEODATA.ABOUT.description});
  }

}
