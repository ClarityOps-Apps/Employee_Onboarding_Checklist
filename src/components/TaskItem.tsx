import React, { useState } from 'react';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="task-item">
      <div className="task-content">
        <div className="pt-0.5">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="task-checkbox"
          />
        </div>
        <div className="flex-1">
          <p className={`task-text ${isChecked ? 'task-text-checked' : ''}`}>
            {task.description}
          </p>
        </div>
      </div>
      {task.assignee && (
        <div className="task-assignee">
          {task.assignee}
        </div>
      )}
    </div>
  );
};

export default TaskItem;