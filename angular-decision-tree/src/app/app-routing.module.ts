import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload-component/file-upload.component';
import { TreeDiagramComponent } from './tree-diagram-component/tree-diagram.component';

const appRoutes: Routes = [
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'tree-diagram', component: TreeDiagramComponent },
  { path: '', redirectTo: '/#', pathMatch: 'full' },
  { path: '**', component: FileUploadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
