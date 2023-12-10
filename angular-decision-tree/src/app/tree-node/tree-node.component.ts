import { Component, Input } from '@angular/core';
import { TreeNode } from '../models/tree.model';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css'],
})
export class TreeNodeComponent {
  @Input() node: TreeNode;
}
