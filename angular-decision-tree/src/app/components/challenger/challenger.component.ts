import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SymptomsModel } from '../../models/tree.model';
import { DecisionTreeService } from '../../providers/decision-tree.service';
import { getSymptomsByTail } from '../../utils/utils';

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
  node?: string;
  question: string | undefined;
  data: Node[] = [];
  lstSymptoms: SymptomsModel[] = [];
  currentChildren = new CurrentChildren();
  lastLeaf: boolean = false;
  buttonDisabled: boolean = true;

  constructor(
    private treeService: DecisionTreeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getSymptoms();
    this.getTreeData();
  }

  getTreeData() {
    this.treeService.getTree().subscribe((data) => {
      this.data = data;
      this.node = this.findLabelByKey(this.data, '0', this.currentChildren);
      if (this.data.length) {
        this.buttonDisabled = false;
      }
    });
  }

  getSymptoms() {
    this.lstSymptoms = getSymptomsByTail();
  }

  findLabelByKey(
    nodes: Node[],
    targetKey: string,
    currentChildren: CurrentChildren
  ): string | undefined {
    for (const node of nodes) {
      const result = this.findLabelInNode(node, targetKey, currentChildren);
      if (result) {
        this.node = result;
        this.question = this.generateQuestion(result);
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
    if (response == 'tree') {
      this.router.navigate(['/tree-diagram']);
    }
  }

  generateQuestion(targetKey: string): string | undefined {
    const key = targetKey.split('"')[1].trim();
    const entry = this.lstSymptoms.find((item) => item.key === key);
    this.node = key;
    if (entry) {
      return `${entry.label} ${entry.key}?`;
    } else {
      return undefined;
    }
  }

  restartButtonClick() {
    this.getTreeData();
    this.lastLeaf = false;
    this.buttonDisabled = true;
    this.question = undefined;
  }
}
