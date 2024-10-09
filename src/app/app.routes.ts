import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { DigitalMarketingComponent } from './components/digital-marketing/digital-marketing.component';
import { MvasComponent } from './components/mvas/mvas.component';

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
];
