import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component-1/component-1.component';
import { Component2Component } from './component-2/component-2.component';


const appRoutes: Routes = [
	{ path: 'tree', component: Component1Component },
	{ path: '2', component: Component2Component },
	{ path: '', redirectTo: '/1', pathMatch: 'full' },
	{ path: '**', component: Component1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
