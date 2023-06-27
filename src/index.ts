const sales = [
    'CyberConnect Community Sale',
    'Neon Community Sale',
    'Archway Community Sale'
] as const
export type Sale = (typeof sales)[number]

const reasons = [
    'Register to sale',
    'Participate in sale'
] as const
export type LoginReason = (typeof reasons)[number]

export type SampleInputData = {
    readonly action: 'sample'
}

export type LoginInputData = {
    readonly action: 'login'
    readonly saleName: Sale
    readonly loginReason: LoginReason
}

export type RegisterToSaleInputData = {
    readonly action: 'register-to-sale'
    readonly saleName: Sale
}

export type ParticipateInSaleInputData = {
    readonly action: 'participate-in-sale'
    readonly saleName: Sale
}

export type InputData = SampleInputData | LoginInputData | RegisterToSaleInputData | ParticipateInSaleInputData

export type AccountData = {
    readonly onePasswordID: string
    readonly proton: string
    readonly name: string
}

export type AccountInputData = InputData & {
    account: AccountData
}

export function isLoginReason(reason: string): reason is LoginReason {
    return reasons.some((item) => item === reason)
}

export function isSale(sale: string): sale is Sale {
    return sales.some((item) => item === sale)
}

export function generateAutomationName(data: InputData): string {
    switch (data.action) {
        case 'sample':
            return 'sample'
        case 'login':
            return `Login ${data.loginReason} ${data.saleName}`
        case 'register-to-sale':
            return `Register to sale ${data.saleName}`
        case 'participate-in-sale':
            return `Participate in sale ${data.saleName}`
    }
}