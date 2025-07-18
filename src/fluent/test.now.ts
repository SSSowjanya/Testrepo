import { BusinessRule, StringColumn, Table } from '@servicenow/sdk/core'
import '@servicenow/sdk/global'
import { showStateUpdate } from '../server/script.js'

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


//create a business rule

BusinessRule({
    name: 'testbr',
    table: 'x_1436243_ideunive_test',
    when: 'after',
    action: ["update","delete"],
    script: showStateUpdate,
    order: 100,
    active: true,
    add_message: false,
    abort_action: false,
    $id: Now.ID['br1'],
})