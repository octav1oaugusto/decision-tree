import { Component, OnInit } from '@angular/core';
import { DecisionTreeService } from '../providers/decision-tree.service';

interface Node {
  key: string;
  label: string;
  children?: Node[];
}

class CurrentChildren {
  children: Node[] = [];
}

@Component({
  selector: 'challenger',
  templateUrl: './challenger.component.html',
  styleUrl: './challenger.component.css',
})
export class ChallengerComponent implements OnInit {
  constructor(private treeService: DecisionTreeService) {}
  node?: string;
  data: Node[] = [];
  currentChildren = new CurrentChildren();
  lastLeaf: boolean = false;

  ngOnInit() {
    this.getTreeData();
  }

  getTreeData() {
    this.treeService.getTree().subscribe((data) => {
      this.data = data;
      this.node = this.findLabelByKey(this.data, '0', this.currentChildren);
    });
  }

  findLabelByKey(
    nodes: Node[],
    targetKey: string,
    currentChildren: CurrentChildren
  ): string | undefined {
    for (const node of nodes) {
      const result = this.findLabelInNode(node, targetKey, currentChildren);
      if (result) {
        return result;
      }
    }

    return undefined;
  }

  findLabelInNode(
    node: Node,
    targetKey: string,
    currentChildren: CurrentChildren
  ): string | undefined {
    if (node.key === targetKey) {
      if (node.children) {
        currentChildren.children = node.children;
      } else {
        this.lastLeaf = true;
      }
      return node.label;
    }

    if (node.children) {
      const childResult = this.findLabelByKey(
        node.children,
        targetKey,
        currentChildren
      );
      if (childResult) {
        return childResult;
      }
    }

    return undefined;
  }

  handleButtonClick(response: string) {
    console.log(response);
    if (response == 'yes' || response == 'maybe') {
      this.node = this.findLabelByKey(
        this.data,
        this.currentChildren.children[0].key,
        this.currentChildren
      );
    }
    if (response == 'no') {
      this.node = this.findLabelByKey(
        this.data,
        this.currentChildren.children[1].key,
        this.currentChildren
      );
    }
  }

  restartButtonClick() {
    this.getTreeData();
    this.lastLeaf = false;
  }
}
