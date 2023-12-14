import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DecisionTreeService } from '../providers/decision-tree.service';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
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
