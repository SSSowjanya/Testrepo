import { StringColumn, Table } from '@servicenow/sdk/core'
import '@servicenow/sdk/global'

//creates todo table, with three columns (deadline, status and task)
export const x_1436243_ideunive_test = Table({
    name: 'x_1436243_ideunive_test',
    extends: 'task',
    schema: {
        status: StringColumn({ label: 'Status', mandatory: true, read_only: true }),
    },
    label: 'Ideunive Test',
    actions: ['read', 'update', 'create'],
})
//insert a record

import { Record } from '@servicenow/sdk/core'

export const ideuni1 = Record({
    $id: Now.ID['ideuni-1'],
    table: 'x_1436243_ideunive_test',
    data: {
        active: 'true',
        escalation: '1435',
        description: 'Unable to send or receive emails.',
    },
})
