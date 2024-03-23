import { useEffect, useState } from "react";

const LS_TASKS_KEY = 'tasks'

function getTasksLs() {
  if (typeof window === 'undefined') {
    return []
  }

  const tasksString = localStorage.getItem(LS_TASKS_KEY);
  const tasksJson = JSON.parse(tasksString || '{}')

  return tasksJson
}

function setTasksToLs(tasks: TasksObject) {
  if (typeof window !== 'undefined') {
    const tasksString = JSON.stringify(tasks)
    localStorage.setItem(LS_TASKS_KEY, tasksString)
  }
}

interface TasksObject {
  [key: number]: Task | undefined
}

export interface Task {
  title: string
}

export function useTasks() {
  const [tasks, setTasks] = useState<TasksObject>({})

  useEffect(() => {
    setTasks(getTasksLs())
  }, [])

  function saveTask(newTask: Task, position: number) {
    const newTasks = { ...tasks, [position]: newTask }

    setTasks(newTasks)
    setTasksToLs(newTasks)
  }

  function completeTask(position: number) {
    const newTasks = { ...tasks, [position]: undefined }

    setTasks(newTasks)
    setTasksToLs(newTasks)
  }

  return { tasks, saveTask, completeTask }
}