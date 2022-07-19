import {Component} from 'solid-js'
import Search from '../components/icons/Search'
import Setting from '../components/icons/Setting'
import Moon from '../components/icons/Moon'
import Sun from '../components/icons/Sun'

const IndexPage: Component = () => {
    return (
        <div class='w-full flex flex-col'>
            <header class='w-full h-12 flex items-center justify-between px-2 py-2 overflow-x-auto'>
                <div class='inline-flex items-center space-x-2'>
                    <button class='btn btn-sm btn-ghost'>
                        DATABASE-INDEX
                    </button>
                </div>
                <div class='flex items-center space-x-2'>
                    <button class='btn btn-square btn-sm btn-ghost'>
                        <Search class='w-4 h-4'/>
                    </button>
                    <button class='btn btn-square btn-sm btn-ghost'>
                        <label class='swap swap-rotate'>
                            <input type="checkbox"/>
                            <Moon class='w-4 h-4 swap-off'/>
                            <Sun class='w-4 h-4 swap-on'/>
                        </label>
                    </button>

                    <button class='btn btn-square btn-sm btn-ghost'>
                        <Setting class='w-4 h-4'/>
                    </button>
                    <button class='btn btn-sm'>
                        登录
                    </button>
                </div>
            </header>
        </div>
    )
}

export default IndexPage