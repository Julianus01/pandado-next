import TopTask from '@/components/TopTask'
import { useTasks } from '@/components/tasks/useTasks'

function TasksPage() {
  const useTasksHook = useTasks()

  return (
    <div className="w-full max-w-xl mx-auto pt-20 space-y-6 px-5 pb-40">
      <h1 className="text-6xl text-gray-800 dark:text-slate-200 font-extrabold">Top3</h1>

      <div className="space-y-4">
        <TopTask task={useTasksHook.tasks?.[0]} onSave />

        <TopTask />

        <TopTask />
      </div>
    </div>
  )
}

export default TasksPage
