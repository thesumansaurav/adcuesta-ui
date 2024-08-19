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
        path: 'SEO-Mistakes-to-Avoid:-Common-Pitfalls-and-How-to-Fix-Them',
        component: BlogDetailsComponent,
      },
      {
        path: 'Security-and-Fraud-Prevention-in-Direct-Carrier-Billing:-How-Safe-Are-We',
        component: BlogDetails2Component,
      },
      {
        path: 'Content-Marketing-Ethics:-Balancing-Authenticity-and-Persuasion',
        component: BlogDetails3Component,
      },
      {
        path: 'The-Role-of-AI-in-Campaign-Management:-Friend-or-Foe',
        component: BlogDetails4Component,
      },
      {
        path: 'The-Psychology-of-Campaigns:-Understanding-What-Makes-Audiences-Tick',
        component: BlogDetails5Component,
      },
      {
        path: 'Digital-Transformation-in-MENA:-How-Telecom-is-leading-the-way',
        component: BlogDetails6Component,
      },
      {
        path: 'Predicting-the-Future-of-MVAS-Content-Marketing:-Key-Trends-to-Watch',
        component: BlogDetails7Component,
      },
      {
        path: 'The-Power-of-Consistency:-Maintaining-your-Brand-Voice-across-all-Platforms',
        component: BlogDetails8Component,
      },
      {
        path: 'Personal-vs-Business-Branding:-Striking-the-Right-Balance',
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
