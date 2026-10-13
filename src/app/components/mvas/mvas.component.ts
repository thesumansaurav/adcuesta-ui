import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MvasCapabilitiesComponent } from './components/mvas-capabilities/mvas-capabilities.component';
import { MvasProductsComponent } from './components/mvas-products/mvas-products.component';
import { MvasCoverageComponent } from './components/mvas-coverage/mvas-coverage.component';
import { MvasArchitectureComponent } from './components/mvas-architecture/mvas-architecture.component';
import { MvasStatsComponent } from './components/mvas-stats/mvas-stats.component';
import { MvasContactComponent } from './components/mvas-contact/mvas-contact.component';

@Component({
  selector: 'app-mvas',
  standalone: true,
  imports: [
    CommonModule,
    MvasCapabilitiesComponent,
    MvasProductsComponent,
    MvasCoverageComponent,
    MvasArchitectureComponent,
    MvasStatsComponent,
    MvasContactComponent
  ],
  templateUrl: './mvas.component.html',
  styleUrl: './mvas.component.scss'
})
export class MvasComponent {

}
