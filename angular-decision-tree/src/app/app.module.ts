import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Component1Component } from './component-1/component-1.component';
import { Component2Component } from './component-2/component-2.component';
import { Component3Component } from './component-3/component-3.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
	declarations: [
		AppComponent,
		MainNavComponent,
		Component1Component,
		Component2Component,
		Component3Component,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatListModule,
		MatSidenavModule,
		MatButtonModule,
		MatIconModule,
		// FlexLayoutModule,
		AppRoutingModule
		
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
