import { StringColumn, Table } from '@servicenow/sdk/core'

export const x_1751837_universe_my_requests = Table({
    name: 'x_1751837_universe_my_requests',
    label: 'My Request',
    allow_web_service_access: false,
    allow_new_fields: false,
    allow_client_scripts: false,
    allow_ui_actions: false,
    extensible: false,
    extends: 'task',
    actions: ['read', 'update', 'create'],
    schema: {
        status: StringColumn({
            label: 'Status',
            maxLength: 40,
        }),
    },
})
