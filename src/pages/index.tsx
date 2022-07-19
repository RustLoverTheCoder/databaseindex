import {Component, createSignal, For} from 'solid-js'
import Layouts from "../layouts";
import {Link} from 'solid-app-router'
import Database from "../components/icons/Database";
import classNames from '../utils/classNames.js'
import DotsVertical from "../components/icons/DotsVertical";


const IndexPage: Component = () => {
    const [tabActive, setTabActive] = createSignal<string>('db1')
    const tab = [{
        key: 'db1',
        icon: <Database class='w-4 h-4 flex-shrink-0'/>,
    }, {
        key: 'db2',
        icon: <Database class='w-4 h-4 flex-shrink-0'/>,
    }, {
        key: 'db3',
        icon: <Database class='w-4 h-4 flex-shrink-0'/>,
    }, {
        key: 'db4',
        icon: <Database class='w-4 h-4 flex-shrink-0'/>,
    }, {
        key: 'db5',
        icon: <Database class='w-4 h-4 flex-shrink-0'/>,
    }]
    return (
        <Layouts>
            <div class='flex-1 flex'>
                <div class='h-full w-12 border-r'>
                    <aside class='flex flex-col'>
                        <nav class='flex flex-1 flex-nowrap flex-col flex-none tabs'>
                            <For each={tab}>
                                {item => {
                                    return (
                                        <div
                                            onClick={() => setTabActive(item.key)}
                                            class={classNames(tabActive() === item.key ? ' tab-active bg-gray-100' : '', 'h-12 w-12 flex justify-center items-center cursor-pointer tab tab-bordered  border-b-0 border-l-4')}>
                                            {item.icon}
                                        </div>
                                    )
                                }}
                            </For>
                        </nav>
                    </aside>
                </div>
                <div class='h-full flex-1'>

                </div>

                <div class='h-full w-1 flex justify-center items-center bg-gray-100 cursor-col-resize overflow-hidden'>
                    <DotsVertical class='w-3 h-3 flex-shrink-0 text-gray-400'/>
                </div>
                <div class='h-full w-1/4'>

                </div>
            </div>
        </Layouts>
    )
}

export default IndexPage