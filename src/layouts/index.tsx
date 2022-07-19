import {Component} from 'solid-js'
import Search from "../components/icons/Search";
import Moon from "../components/icons/Moon";
import Sun from "../components/icons/Sun";
import Setting from "../components/icons/Setting";
import Cloud from '../components/icons/Cloud'
import {JSX} from "solid-js/types/jsx";
import ExclamationCircle from "../components/icons/ExclamationCircle";
import Support from "../components/icons/Support";
import {Link} from "solid-app-router";
import LightningBolt from "../components/icons/LightningBolt";
import StatusOnline from "../components/icons/StatusOnline";
import Plus from "../components/icons/plus";

const Layouts: Component<{ children: JSX.Element }> = ({children}) => {
    return (
        <div class='w-full h-full flex flex-col overflow-hidden'>
            <header class='w-full h-12 flex items-center justify-between px-2 py-2 border-b'>
                <div class='inline-flex items-center space-x-2'>
                    <Link href='/' class='btn btn-sm btn-ghost hover:bg-transparent'>
                        DATABASE-INDEX
                    </Link>
                </div>
                <div class='inline-flex items-center space-x-2'>
                    <div class="tooltip tooltip-bottom" data-tip="搜索">
                        <button class='btn btn-square btn-sm btn-ghost'>
                            <Search class='w-4 h-4'/>
                        </button>
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="新增数据库">
                        <button class='btn btn-square btn-sm btn-ghost'>
                            <Plus class='w-4 h-4'/>
                        </button>
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="主题">
                        <label class='swap swap-rotate btn btn-square btn-sm btn-ghost'>
                            <input type="checkbox" onChange={(e: Event) => {
                                const checked = (e.target as HTMLInputElement).checked
                                if (!!checked) {
                                    /// 设置夜间
                                    document.documentElement.setAttribute("data-theme", 'dark');
                                } else {
                                    /// 设置日间
                                    document.documentElement.setAttribute("data-theme", 'light');
                                }
                            }}/>
                            <Moon class='w-4 h-4 swap-off'/>
                            <Sun class='w-4 h-4 swap-on'/>
                        </label>
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="设置">
                        <button class='btn btn-square btn-sm btn-ghost'>
                            <Setting class='w-4 h-4'/>
                        </button>
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="智能模式">
                        <button class='btn btn-square btn-sm btn-ghost'>
                            <StatusOnline class='w-4 h-4'/>
                        </button>
                    </div>
                    <button class='btn btn-sm'>
                        登录
                    </button>
                </div>
            </header>
            <div class='flex-1 flex'>
                {children}
            </div>
            <div class='w-full h-8 flex justify-between border-t'>
                <div class='flex'>
                    <div class="tooltip tooltip-top" data-tip="云更新">
                        <button class='btn btn-sm btn-ghost hover:bg-transparent'>
                            <Cloud class='w-4 h-4'/>
                        </button>
                    </div>
                    <div class="tooltip tooltip-top" data-tip="问题">
                        <button class='btn btn-sm btn-ghost hover:bg-transparent'>
                            <ExclamationCircle class='w-4 h-4'/>
                        </button>
                    </div>
                </div>
                <div class='flex'>
                    <div class="tooltip tooltip-top" data-tip="快捷方式">
                        <button class='btn btn-sm btn-ghost hover:bg-transparent'>
                            <LightningBolt class='w-4 h-4'/>
                        </button>
                    </div>
                    <div class="tooltip tooltip-top" data-tip="支持">
                        <button class='btn btn-sm btn-ghost hover:bg-transparent'>
                            <Support class='w-4 h-4'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layouts