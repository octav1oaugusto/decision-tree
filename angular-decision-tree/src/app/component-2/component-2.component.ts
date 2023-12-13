import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
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
  files!: TreeNode[];

  ngOnInit() {
    this.getTreeData();
    // this.nodeService.getFiles().then((data) => (this.files = data));
  }

  getTreeData() {
    this.treeService.getTree().subscribe((data) => {
      this.treeData = data;
      this.files = data;
      console.log('Tree Data:', this.treeData);
    });
  }

  expandAll() {
    this.files.forEach((node) => {
      this.expandRecursive(node, true);
    });
  }

  collapseAll() {
    this.files.forEach((node) => {
      this.expandRecursive(node, false);
    });
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach((childNode) => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }
}
