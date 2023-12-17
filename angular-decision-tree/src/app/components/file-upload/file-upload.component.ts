import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FileUploadService } from '../../providers/file-upload.service';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  providers: [FileUploadService, MessageService],
})
export class FileUploadComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;
  file: Set<File>;
  constructor(
    private messageService: MessageService,
    private fileUploadService: FileUploadService,
    private router: Router
  ) {}

  ngOnInit() {}

  onUpload(event: any) {
    const file = event.files[0];
    if (file) {
      this.fileUploadService.upload(file).subscribe((res) => {
        if (res.success)
          // this.messageService.add({
          //   severity: 'info',
          //   summary: 'Success',
          //   detail: 'File upload successful',
          // });
          this.router.navigate(['/challenger']);
      });
    }
  }
}
