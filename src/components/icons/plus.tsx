import {Component} from 'solid-js'

const Plus: Component<{ class: string }> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"
             stroke-width={2}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
        </svg>
    )
}

export default Plus