import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import TaskItem from './TaskItem';
import { Task } from '../types';

interface TaskSectionProps {
  title: string;
  tasks: Task[];
}

const TaskSection: React.FC<TaskSectionProps> = ({ title, tasks }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-white rounded-lg shadow-md">
      <button
        className="task-section-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-medium">{title}</span>
        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      
      {isExpanded && (
        <div className="divide-y divide-gray-100">
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskSection;