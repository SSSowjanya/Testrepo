import '@servicenow/sdk/global'
import {Table,StringColumn} from '@servicenow/sdk/core'

//creates todo table, with three columns (deadline, status and task)
export const x_1436243_ideunive = Table({
    name: 'x_1436243_ideunive',
    extends: 'task',
    schema: {
        status: StringColumn({ label: 'Status' })
    }
        
})


