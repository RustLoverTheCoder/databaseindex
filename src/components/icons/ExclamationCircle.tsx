import {Component} from 'solid-js'

const ExclamationCircle: Component<{ class: string }> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} fill="none" viewBox="0 0 24 24"
             stroke="currentColor" stroke-width={2}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
    )
}

export default ExclamationCircle