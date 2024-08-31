import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AppConstantService } from '../../app-constant.service';

@Component({
  selector: 'app-gen-ai',
  standalone: true,
  imports: [],
  templateUrl: './gen-ai.component.html',
  styleUrl: './gen-ai.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GenAiComponent {

  constructor(
    private title: Title,
    private meta : Meta,
    private appConstant: AppConstantService
  ){
    this.title.setTitle(this.appConstant.SEODATA.GENAI.title);
    this.meta.updateTag({name: 'description', content: this.appConstant.SEODATA.GENAI.description});
  }

}
