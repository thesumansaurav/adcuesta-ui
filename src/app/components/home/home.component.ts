import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { AppConstantService } from '../../app-constant.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    public router:Router,
    private title: Title, private meta: Meta,
    private appConstant: AppConstantService
    ){
    console.log(this.router.url)

    localStorage.setItem('header', this.router.url);
    this.title.setTitle(this.appConstant.SEODATA.HOMEPAGE.title);
    this.meta.updateTag({name: 'description', content: this.appConstant.SEODATA.HOMEPAGE.description});
  }

}
