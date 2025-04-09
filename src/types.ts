export interface Task {
  description: string;
  assignee?: string;
}

export interface Section {
  title: string;
  tasks: Task[];
}