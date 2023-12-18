import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengerComponent } from './components/challenger/challenger.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { TreeDiagramComponent } from './components/tree-diagram/tree-diagram.component';

const appRoutes: Routes = [
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'tree-diagram', component: TreeDiagramComponent },
  { path: 'challenger', component: ChallengerComponent },
  { path: '', redirectTo: '/file-upload', pathMatch: 'full' },
  { path: '**', component: FileUploadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
