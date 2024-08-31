import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppConstantService } from '../../app-constant.service';

@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './branding.component.html',
  styleUrl: './branding.component.scss'
})
export class BrandingComponent {

  constructor(
    private title: Title,
    private meta : Meta,
    private appConstant: AppConstantService
  ){
    this.title.setTitle(this.appConstant.SEODATA.BRANDING.title);
    this.meta.updateTag({name: 'description', content: this.appConstant.SEODATA.BRANDING.description});
  }

}
