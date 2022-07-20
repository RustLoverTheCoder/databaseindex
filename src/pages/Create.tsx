import {Component, For} from 'solid-js'
import {supportDBList} from '../constants'

const CreatePage: Component = () => {
    return (
        <div class='w-full h-full'>
            <div class='container px-5 py-24 mx-auto'>
                <div class="flex flex-wrap -m-4">
                    <For each={supportDBList}>
                        {item => {
                            return (
                                <div class="lg:w-1/4 md:w-1/2 p-4 w-full flex flex-col items-center justify-center">
                                    <div
                                        class='w-20 h-20 rounded-xl flex justify-center items-center mb-2'>
                                        <img src={item.image} alt="" class='w-10 h-10'/>
                                    </div>
                                    <div class='text-center text-sm font-medium'>
                                        {item.name}
                                    </div>
                                </div>
                            )
                        }}
                    </For>
                </div>
            </div>
        </div>
    )
}

export default CreatePage