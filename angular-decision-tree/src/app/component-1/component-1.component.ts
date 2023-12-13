import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DecisionTreeService } from '../providers/decision-tree.service';

@Component({
  selector: 'app-component-1',
  templateUrl: './component-1.component.html',
  styleUrls: ['./component-1.component.css'],
})
export class Component1Component implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;
  constructor(
    public treeService: DecisionTreeService,
    private messageService: MessageService
  ) {}

  public decisionTreeService: DecisionTreeService;

  ngOnInit() {}

  onFileChange(): void {
    if (this.fileInput && this.fileInput.nativeElement) {
      const inputElement = this.fileInput.nativeElement;

      const file = inputElement.files?.[0];
      this.treeService.uploadRules(file).subscribe((data) => {
        console.log('Uploaded. Response: ', data);
      });
    }
  }

  onUpload(event: any) {
    console.log(event);
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded with Basic Mode',
    });
  }
}
