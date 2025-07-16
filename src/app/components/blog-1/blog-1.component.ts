import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-1',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './blog-1.component.html',
  styleUrl: './blog-1.component.scss'
})
export class Blog1Component {

}
