import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '73cce449b9a749e682d7fa34c927bfe4'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: 'f6850e00a17643f195327139520af36c'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'e7c34eb5dd1c453d856ef30458415ec2'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '60e35e21bead47c599efad27a1ff1ecb'
                    }
                }
            }
        }
    }
}
