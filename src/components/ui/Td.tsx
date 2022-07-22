import { Component, createSignal } from 'solid-js'

const Td: Component<{ children: Element }> = ({ children }) => {
  const [active, setActive] = createSignal(false)
  return (
    <td class='cursor-default' contentEditable={active()} onFocus={() => {
    }} onClick={() => setActive(true)}>
      {children}
    </td>
  )
}

export default Td