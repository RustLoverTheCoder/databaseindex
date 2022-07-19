import {Component, createSignal, For} from 'solid-js'
import Layouts from "../layouts";
import {Link} from 'solid-app-router'
import Database from "../components/icons/Database";
import classNames from '../utils/classNames.js'


const IndexPage: Component = () => {
    const [tabActive, setTabActive] = createSignal<string>('db')
    const tab = [{
        key: 'db',
        icon: <Database class='w-4 h-4 flex-shrink-0'/>,
    }, {
        key: 'tool',
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
                                            class={classNames(tabActive() === item.key ? ' tab-active' : '', 'h-12 w-12 flex justify-center items-center cursor-pointer tab tab-bordered  border-b-0 border-l-4')}>
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
                <div class='h-full w-1/4 bg-red-50'></div>
            </div>
        </Layouts>
    )
}

export default IndexPage