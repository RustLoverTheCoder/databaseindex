import {Component} from 'solid-js'
import DotsVertical from "../components/icons/DotsVertical";


const IndexPage: Component = () => {
    return (
        <>
            <div class='h-full flex-1'>
            </div>
            <div class='h-full w-1 flex justify-center items-center bg-gray-100 cursor-col-resize overflow-hidden'>
                <DotsVertical class='w-3 h-3 flex-shrink-0 text-gray-400'/>
            </div>
            <div class='h-full w-1/4'>
            </div>
        </>
    )
}

export default IndexPage