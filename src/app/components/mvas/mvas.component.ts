import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppConstantService } from '../../app-constant.service';

@Component({
  selector: 'app-mvas',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './mvas.component.html',
  styleUrl: './mvas.component.scss'
})
export class MvasComponent {

  constructor(
    private title: Title,
    private meta : Meta,
    private appConstant: AppConstantService
  ){
    this.title.setTitle(this.appConstant.SEODATA.MVAS.title);
    this.meta.updateTag({name: 'description', content: this.appConstant.SEODATA.MVAS.description});
  }

}
