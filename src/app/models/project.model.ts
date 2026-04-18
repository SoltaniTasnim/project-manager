export type TaskStatus = 'En attente' | 'En cours' | 'Terminé';
export type TaskPriority = 'Haute' | 'Moyenne' | 'Basse';

export type Task = {
  title: string;
  priority: TaskPriority;
  status: TaskStatus;
  isNew?: boolean;
};

export type Project = {
  name: string;
  description: string;
  status: TaskStatus | string;
  createdAt: string;
  tasks: Task[];
  newTaskTitle?: string;
  newTaskPriority?: TaskPriority;
  newTaskStatus?: TaskStatus;
};
