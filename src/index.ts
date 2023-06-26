export type Sale = 'CyberConnect Community Sale' | 'Neon Community Sale' | 'Archway Community Sale'

export type LoginReason = 'Register to sale' | 'Participate in sale'

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