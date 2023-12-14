import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { TreeModule } from 'primeng/tree';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component-1/component-1.component';
import { Component2Component } from './component-2/component-2.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DecisionTreeService } from './providers/decision-tree.service';
import { TreeDiagramComponent } from './tree-diagram/tree-diagram.component';
import { TreeNodeComponent } from './tree-node/tree-node.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    Component1Component,
    Component2Component,
    TreeNodeComponent,
    TreeDiagramComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    // FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    TreeModule,
    ButtonModule,
    FileUploadModule,
    ToastModule,
    SidebarModule,
    MenuModule,
  ],
  providers: [DecisionTreeService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
