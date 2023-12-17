import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { DecisionTreeService } from '../../providers/decision-tree.service';

@Component({
  selector: 'tree-diagram',
  templateUrl: './tree-diagram.component.html',
  styleUrls: ['./tree-diagram.component.css'],
})
export class TreeDiagramComponent implements OnInit {
  constructor(public treeService: DecisionTreeService) {}

  public decisionTreeService: DecisionTreeService;
  treeData: TreeNode = {};
  files!: TreeNode[];

  ngOnInit() {
    this.getTreeData();
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
