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
  treeData: TreeNode;

  ngOnInit() {
    this.getTreeData();
  }

  rootNode: TreeNode = {
    id: 1,
    label: 'Root Node',
    children: [
      {
        id: 2,
        label: 'Child Node 1',
        children: [
          { id: 4, label: 'Child Node 1.1' },
          { id: 5, label: 'Child Node 1.2' },
        ],
      },
      {
        id: 3,
        label: 'Child Node 2',
        children: [{ id: 6, label: 'Child Node 2.1' }],
      },
    ],
  };

  getTreeData() {
    this.treeService.getTree().subscribe(
      (data) => {
        this.treeData = data;
        console.log('Tree Data:', this.treeData);
      },
      (error) => {
        console.error('Error fetching tree data:', error);
      }
    );
  }
}
