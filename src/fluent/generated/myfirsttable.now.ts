import { Table, StringColumn } from '@servicenow/sdk/core'
export const x_1751837_universe_myfirsttable = Table({
    name: 'x_1751837_universe_myfirsttable',
    label: 'myfirsttable',
    extends: 'task',
    schema: {
        status: StringColumn({ label: 'Status' }),
    },
})