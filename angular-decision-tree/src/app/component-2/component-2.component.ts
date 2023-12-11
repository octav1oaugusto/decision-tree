import { Component, OnInit } from '@angular/core';
import { TreeNode } from '../models/tree.model';
import { DecisionTreeService } from '../providers/decision-tree.service';

@Component({
  selector: 'app-component-2',
  templateUrl: './component-2.component.html',
  styleUrls: ['./component-2.component.css'],
})
export class Component2Component implements OnInit {
  constructor(public treeService: DecisionTreeService) {}

  public decisionTreeService: DecisionTreeService;
  treeData: TreeNode = {};

  ngOnInit() {
    this.getTreeData();
  }

  getTreeData() {
    this.treeService.getTree().subscribe((data) => {
      this.treeData = data;
      console.log('Tree Data:', this.treeData);
    });
  }
}
