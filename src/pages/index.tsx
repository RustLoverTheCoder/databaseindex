import { Component, createSignal, Match, Switch, onMount } from 'solid-js'
import { window } from "@tauri-apps/api";
import DotsVertical from '../components/icons/DotsVertical'
import Time from '../components/icons/Time'
import Folder from '../components/icons/Folder'
import classNames from '../utils/classNames'
import Cube from '../components/icons/Cube'
import Table from '../components/ui/Table'
import Trash from '../components/icons/Trash'


const IndexPage: Component = () => {
  const [active, setActive] = createSignal('time')

  onMount(() => {
    const win = window.getCurrent();
    win.show();
  })

  return (
    <>
      <div class='h-full flex-1 relative'>
        <div
          class='absolute top-0 right-0 bottom-0 left-0 overflow-y-auto overflow-y-auto overflow-x-auto'>
          <Table />
        </div>
      </div>
      <div class='h-full w-1 flex justify-center items-center bg-gray-100 cursor-col-resize overflow-hidden'>
        <DotsVertical class='w-3 h-3 flex-shrink-0 text-gray-400' />
      </div>
      <div class='h-full w-1/4 relative flex'>
        <div class='h-full w-12 border-r flex flex-col tabs p-2 space-y-2'>
          <button class='btn btn-sm btn-square btn-ghost' onClick={() => setActive('time')}>
            <Time class={classNames(active() === 'time' ? 'text-primary' : 'opacity-50', 'w-4 h-4')} />
          </button>
          <button class='btn btn-sm btn-square btn-ghost' onClick={() => setActive('folder')}>
            <Folder class={classNames(active() === 'folder' ? 'text-primary' : 'opacity-50', 'w-4 h-4')} />
          </button>
          <button class='btn btn-sm btn-square btn-ghost' onClick={() => setActive('cube')}>
            <Cube class={classNames(active() === 'cube' ? 'text-primary' : 'opacity-50', 'w-4 h-4')} />
          </button>
        </div>
        <div class='flex-1 flex flex-col relative'>
          <Switch>
            <Match when={active() === 'time'}>
              <div class='flex items-center border-b'>
                <div class='flex flex-1 p-4 py-2 bg-transparent h-8'>
                  <input type='text' placeholder='搜索' autocomplete='off'
                    class='flex-1 text-xs outline-0' />
                </div>
                <button class='btn btn-sm btn-ghost btn-square hover:bg-transparent'>
                  <Trash class='w-4 h-4' />
                </button>
              </div>
            </Match>
            <Match when={active() === 'folder'}>
              <div>123</div>
            </Match>
            <Match when={active() === 'cube'}>
              <div>123</div>
            </Match>
          </Switch>


        </div>
      </div>
    </>
  )
}

export default IndexPage