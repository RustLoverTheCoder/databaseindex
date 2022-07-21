import {Component, createSignal, For, Show} from 'solid-js'

import {
    flexRender,
    getCoreRowModel,
    ColumnDef,
    createSolidTable,
} from '@tanstack/solid-table'

type Person = {
    id: string
    Name: string
    Job: string
    company: string
    lastLogin: string
    favoriteColor: string
}

const defaultData: Person[] = [
    {
        id: '1',
        Name: 'Cy Ganderton',
        Job: 'Quality Control Specialist',
        company: "Littel, Schaden and Vandervort",
        lastLogin: "12/16/2020",
        favoriteColor: "Blue"
    },
    {
        id: '2',
        Name: 'Cy Ganderton',
        Job: 'Quality Control Specialist',
        company: "Littel, Schaden and Vandervort",
        lastLogin: "12/16/2020",
        favoriteColor: "Blue"
    },
    {
        id: '3',
        Name: 'Cy Ganderton',
        Job: 'Quality Control Specialist',
        company: "Littel, Schaden and Vandervort",
        lastLogin: "12/16/2020",
        favoriteColor: "Blue"
    }, {
        id: '4',
        Name: 'Cy Ganderton',
        Job: 'Quality Control Specialist',
        company: "Littel, Schaden and Vandervort",
        lastLogin: "12/16/2020",
        favoriteColor: "Blue"
    }
]


const defaultColumns: ColumnDef<Person>[] = [
    {
        accessorKey: 'id',
        cell: info => info.getValue(),
    },
    {
        accessorKey: 'Name',
        header: () => 'Name',
    },
    {
        accessorKey: 'Job',
        header: () => 'Job',
    },
    {
        accessorKey: 'company',
        header: 'Company',
    },
    {
        accessorKey: 'lastLogin',
        header: 'Last Login',
    },
    {
        accessorKey: 'favoriteColor',
        header: 'Favorite Color',
    },
]


const Table: Component = () => {
    const [data, setData] = createSignal(defaultData)
    const rerender = () => setData(defaultData)
    const [activeTd, setActiveTd] = createSignal('')

    const table = createSolidTable({
        get data() {
            return data()
        },
        columns: defaultColumns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <table class="table table-mini w-full">
            <thead>
            <For each={table.getHeaderGroups()}>
                {headerGroup => (
                    <tr class='border-b'>
                        <For each={headerGroup.headers}>
                            {header => (
                                <th class='bg-white border-r'>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            )}
                        </For>
                    </tr>
                )}

            </For>
            </thead>
            <tbody>
            <For each={table.getRowModel().rows}>
                {row => (
                    <tr>
                        <For each={row.getVisibleCells()}>
                            {cell => (
                                <>
                                    <Show when={cell.column.id === 'id'}>
                                        <th class='cursor-default'>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </th>
                                    </Show>
                                    <Show when={cell.column.id !== 'id'}>
                                        <td class='cursor-default'>
                                            <div contentEditable={true}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </div>
                                        </td>
                                    </Show>
                                </>
                            )}
                        </For>
                    </tr>
                )}
            </For>
            </tbody>
        </table>
    )
}
export default Table