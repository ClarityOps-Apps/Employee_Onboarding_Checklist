import React from 'react';
import TaskSection from './components/TaskSection';
import { sections } from './data/checklistData';
import { Workflow } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Workflow className="w-8 h-8 text-[#447384]" />
            <h1 className="text-2xl font-bold text-[#447384]">ClarityOps</h1>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Employee Onboarding Checklist</h2>
          <p className="text-gray-600 text-sm">Track progress and set clear expectations during employee onboarding</p>
        </div>
        
        <div className="space-y-4">
          {sections.map((section) => (
            <TaskSection
              key={section.title}
              title={section.title}
              tasks={section.tasks}
            />
          ))}
        </div>
        
        <footer className="mt-12 border-t border-gray-200 pt-8 pb-4">
          <div className="text-center text-sm text-gray-600 space-y-2">
            <p className="font-semibold">ClarityOps</p>
            <p><a href="https://www.clarityops.co" className="text-[#447384] hover:underline" target="_blank" rel="noopener noreferrer">www.clarityops.co</a></p>
            <p><a href="mailto:getclear@clarityops.co" className="text-[#447384] hover:underline">getclear@clarityops.co</a></p>
            <p>© 2025 CL360. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;