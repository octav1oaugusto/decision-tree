import { Component, OnInit } from '@angular/core';
import { DecisionTreeService } from '../providers/decision-tree.service';

interface Node {
  key: string;
  label: string;
  children?: Node[];
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

  ngOnInit() {
    this.getTreeData();
    const targetLabel = 'l99'; // Substitua com a palavra-chave desejada

    this.findLabel(this.data, targetLabel);
  }

  getTreeData() {
    this.treeService.getTree().subscribe((data) => {
      this.data = data;
      console.log('Tree Data:', this.data);
      this.findLabel(this.data, '999');
    });
  }

  findLabel(node: Node[], targetLabel: string): string | undefined {
    for (const item of node) {
      console.log('item', item.label);
      this.node = item.label;
      // if (item.label.includes(targetLabel)) {
      //   return `Seu programa tem "${targetLabel}"`;
      // }

      if (item.children) {
        // const result = this.findLabel(item.children, targetLabel);
        // if (result) {
        //   return result;
        // }
      }
    }

    return undefined;
  }
}
