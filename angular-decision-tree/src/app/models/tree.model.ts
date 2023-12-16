export interface TreeNode {
  id?: number;
  label?: string;
  children?: TreeNode[];
}

export interface NodeModel {
  key: string;
  label: string;
  children?: Node[];
}

export interface SymptomsModel {
  key: string;
  label: string;
}
