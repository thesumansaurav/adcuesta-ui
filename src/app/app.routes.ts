import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { DigitalMarketingComponent } from './components/digital-marketing/digital-marketing.component';
import { MvasComponent } from './components/mvas/mvas.component';
import { BlogComponent } from './components/blog/blog.component';
import { Blog1Component } from './components/blog-1/blog-1.component';
import { Blog2Component } from './components/blog2/blog2.component';
import { Blog3Component } from './components/blog3/blog3.component';
import { Blog4Component } from './components/blog4/blog4.component';
import { Blog5Component } from './components/blog5/blog5.component';
import { Blog6Component } from './components/blog6/blog6.component';
import { Blog7Component } from './components/blog7/blog7.component';
import { Blog9Component } from './components/blog9/blog9.component';
import { Blog8Component } from './components/blog8/blog8.component';

export const routes: Routes = [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'services',
        component: ServicesComponent,
      },
      {
        path: 'digitalmarketing',
        component: DigitalMarketingComponent,
      },
      {
        path: 'mvas',
        component: MvasComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path: 'SEO_Mistakes_to_Avoid_Common_Pitfalls_and_How_to_Fix_Them',
        component: Blog1Component,
      },
      {
        path: 'Security_and_Fraud_Prevention_in_Direct_Carrier_Billing_How_Safe_Are_We',
        component: Blog2Component,
      },
      {
        path: 'Content_Marketing_Ethics_Balancing_Authenticity_and_Persuasion',
        component: Blog3Component,
      },
      {
        path: 'The_Role_of_AI_in_Campaign_Management_Friend_or_Foe',
        component: Blog4Component,
      },
      {
        path: 'The_Psychology_of_Campaigns_Understanding_What_Makes_Audiences_Tick',
        component: Blog5Component,
      },
      {
        path: 'Digital_Transformation_in_MENA_How_Telecom_is_leading_the_way',
        component: Blog6Component,
      },
      {
        path: 'Predicting_the_Future_of_MVAS_Content_Marketing_Key_Trends_to_Watch',
        component: Blog7Component,
      },
      {
        path: 'The-Power-of-Consistency:-Maintaining-your-Brand-Voice-across-all-Platforms',
        component: Blog8Component,
      },
      {
        path: 'Personal-vs-Business-Branding:-Striking-the-Right-Balance',
        component: Blog9Component,
      },
];
