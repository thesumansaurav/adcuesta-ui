import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.scss'
})
export class BlogDetailsComponent implements AfterViewInit{
  @ViewChild('sourceDiv') sourceDiv!: ElementRef;
  @ViewChild('targetDiv') targetDiv!: ElementRef;

  ngAfterViewInit(): void {
    // Get the height of the sourceDiv
    const sourceHeight = this.sourceDiv.nativeElement.offsetHeight;
    
    // Set the height of the targetDiv to be less than the sourceDiv (e.g., 10px less)
    this.targetDiv.nativeElement.style.height = (sourceHeight - 0) + 'px';
  }
}
