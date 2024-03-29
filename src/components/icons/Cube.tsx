import {Component} from 'solid-js'

const Cube: Component<{ class: string }> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"
             stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
        </svg>
    )
}

export default Cube