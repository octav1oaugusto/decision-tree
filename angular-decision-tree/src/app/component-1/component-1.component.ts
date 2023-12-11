import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { readFileContent } from '../utils/utils';

@Component({
  selector: 'app-component-1',
  templateUrl: './component-1.component.html',
  styleUrls: ['./component-1.component.css'],
})
export class Component1Component implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;
  constructor() {}

  ngOnInit() {}

  onFileChange(): void {
    if (this.fileInput && this.fileInput.nativeElement) {
      const inputElement = this.fileInput.nativeElement;

      readFileContent(inputElement, (content) => {
        if (content !== null) {
          console.log('File content:', content);
        } else {
          console.log('No file selected');
        }
      });
    }
  }
}
