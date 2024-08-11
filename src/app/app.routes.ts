import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BrandingComponent } from './components/branding/branding.component';
import { MvasComponent } from './components/mvas/mvas.component';
import { BlogDetails5Component } from './components/blog-details-5/blog-details-5.component';
import { BlogDetails4Component } from './components/blog-details-4/blog-details-4.component';
import { BlogDetails3Component } from './components/blog-details-3/blog-details-3.component';
import { BlogDetails2Component } from './components/blog-details-2/blog-details-2.component';
import { BlogDetails9Component } from './components/blog-details-9/blog-details-9.component';
import { BlogDetails8Component } from './components/blog-details-8/blog-details-8.component';
import { BlogDetails7Component } from './components/blog-details-7/blog-details-7.component';
import { BlogDetails6Component } from './components/blog-details-6/blog-details-6.component';
import { TermsComponent } from './components/terms/terms.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { GenAiComponent } from './components/gen-ai/gen-ai.component';

export const routes: Routes = [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path: 'genai',
        component: GenAiComponent,
      },
      {
        path: 'blog-details',
        component: BlogDetailsComponent,
      },
      {
        path: 'blog2',
        component: BlogDetails2Component,
      },
      {
        path: 'blog3',
        component: BlogDetails3Component,
      },
      {
        path: 'blog4',
        component: BlogDetails4Component,
      },
      {
        path: 'blog5',
        component: BlogDetails5Component,
      },
      {
        path: 'blog6',
        component: BlogDetails6Component,
      },
      {
        path: 'blog7',
        component: BlogDetails7Component,
      },
      {
        path: 'blog8',
        component: BlogDetails8Component,
      },
      {
        path: 'blog9',
        component: BlogDetails9Component,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'services',
        component: ServicesComponent,
      },
      {
        path: 'branding',
        component: BrandingComponent,
      },
      {
        path: 'mvas',
        component: MvasComponent,
      },
      {
        path: 'terms',
        component: TermsComponent,
      },
      {
        path: 'privacy',
        component: PrivacyPolicyComponent,
      },
];
