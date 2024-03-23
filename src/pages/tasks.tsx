import TopTask from '@/components/TopTask'
import { useTasks } from '@/components/tasks/useTasks'

function TasksPage() {
  const useTasksHook = useTasks()

  return (
    <div className="w-full max-w-xl mx-auto pt-20 space-y-6 px-5 pb-40">
      <h1 className="text-6xl text-gray-800 dark:text-slate-200 font-extrabold">Top3</h1>

      <div className="space-y-4">
        <TopTask
          task={useTasksHook.tasks?.[0]}
          saveTask={(newTask) => useTasksHook.saveTask(newTask, 0)}
          placeholder="Urgent to accomplish"
          completeTask={() => useTasksHook.completeTask(0)}
        />

        <TopTask
          task={useTasksHook.tasks?.[1]}
          saveTask={(newTask) => useTasksHook.saveTask(newTask, 1)}
          placeholder="Pretty important to do"
          completeTask={() => useTasksHook.completeTask(0)}
        />

        <TopTask
          task={useTasksHook.tasks?.[2]}
          saveTask={(newTask) => useTasksHook.saveTask(newTask, 2)}
          placeholder="Awesome if I do this"
          completeTask={() => useTasksHook.completeTask(0)}
        />
      </div>
    </div>
  )
}

export default TasksPage
