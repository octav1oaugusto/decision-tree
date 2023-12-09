import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component-1/component-1.component';
import { Component2Component } from './component-2/component-2.component';

const appRoutes: Routes = [
  { path: 'file-upload', component: Component1Component },
  { path: 'tree-diagram', component: Component2Component },
  { path: '', redirectTo: '/file-upload', pathMatch: 'full' },
  { path: '**', component: Component1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
