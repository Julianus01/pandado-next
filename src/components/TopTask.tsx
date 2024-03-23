import { useState } from 'react'
import { Task } from './tasks/useTasks'

interface Props {
  task?: Task
}

function TopTask(props: Props) {
  const [task, setTask] = useState<Task>(props.task || { title: '' })

  const canMarkAsDone = !!props.task

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter') {
      saveTask()
    }
  }

  function saveTask() {
    if (task.title.length) {
      console.log('save task')
    }
  }

  return (
    <div
      onKeyDown={onKeyDown}
      onBlur={saveTask}
      className="w-full font-light bg-white focus:ring-offset-0 ring-2 ring-transparent focus:ring-slate-200
        shadow-sm rounded-lg dark:bg-slate-800 flex overflow-hidden dark:focus-within:ring-slate-700"
    >
      <input
        value={task.title}
        onChange={(event) => setTask({ title: event.target.value })}
        className="flex-1 h-full p-6 pr-3 bg-transparent appearance-none outline-none text-lg text-slate-200"
        type="text"
        placeholder="Name your task"
      />

      {canMarkAsDone && (
        <div className="flex items-center pr-5 pl-2 cursor-pointer group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="dark:text-slate-400 dark:group-hover:text-slate-300"
          >
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        </div>
      )}
    </div>
  )
}

export default TopTask
