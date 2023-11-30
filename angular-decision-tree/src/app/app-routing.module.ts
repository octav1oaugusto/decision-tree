import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component-1/component-1.component';
import { Component2Component } from './component-2/component-2.component';
import { Component3Component } from './component-3/component-3.component';

const appRoutes: Routes = [
	{ path: '1', component: Component1Component },
	{ path: '2', component: Component2Component },
	{
		path: '3',
		component: Component3Component,
	},
	{ path: '', redirectTo: '/1', pathMatch: 'full' },
	{ path: '**', component: Component1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
