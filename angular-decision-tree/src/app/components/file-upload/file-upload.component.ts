import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DecisionTreeService } from '../../providers/decision-tree.service';
import { FileUploadService } from '../../providers/file-upload.service';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  providers: [FileUploadService],
})
export class FileUploadComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;
  file: Set<File>;
  constructor(
    public treeService: DecisionTreeService,
    private messageService: MessageService,
    private fileUploadoService: FileUploadService
  ) {}

  ngOnInit() {}

  onUpload(event: any) {
    const file = event.files[0];
    this.file = new Set();
    this.file.add(file);
    if (this.file && this.file.size > 0) {
      this.fileUploadoService.upload(this.file).subscribe((res) => {
        if (res.success)
          this.messageService.add({
            severity: 'info',
            summary: 'Success',
            detail: 'File upload successful',
          });
      });
    }
  }
}
