import { Component, OnInit } from '@angular/core';

export interface TreeNode {
  id: number;
  label: string;
  children?: TreeNode[];
}

@Component({
  selector: 'app-tree-diagram',
  templateUrl: './tree-diagram.component.html',
  styleUrls: ['./tree-diagram.component.css'],
})
export class TreeDiagramComponent implements OnInit {
  ngOnInit() {}
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
}
