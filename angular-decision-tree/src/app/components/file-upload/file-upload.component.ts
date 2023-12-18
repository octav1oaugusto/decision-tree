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
  visible: boolean = false;
  keyMessage: string;
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
        if (res.success) {
          if (!this.visible) {
            this.keyMessage = 'confirm';
            this.messageService.add({
              key: this.keyMessage,
              sticky: true,
              severity: 'success',
              summary: 'Navegar para o desafio?',
            });
            this.visible = true;
          }
        }
      });
    }
  }

  onConfirm() {
    this.messageService.clear(this.keyMessage);
    this.visible = false;
    if (this.keyMessage == 'confirm') {
      this.router.navigate(['/challenger']);
    }
  }

  onReject() {
    this.messageService.clear(this.keyMessage);
    this.visible = false;
  }
}
