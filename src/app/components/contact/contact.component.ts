import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AppConstantService } from '../../app-constant.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(
    private title: Title,
    private meta : Meta,
    private appConstant: AppConstantService
  ){
    this.title.setTitle(this.appConstant.SEODATA.CONTACTUS.title);
    this.meta.updateTag({name: 'description', content: this.appConstant.SEODATA.CONTACTUS.description});
  }

}
