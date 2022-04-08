export interface Delegation {
    'delegator-address': string;
    amount: string;
    reward: number;
    undelegations: any[];
}

export interface EpochApr {
    epoch: number;
    apr: string;
}

export interface ValidatorFull {
    'bls-public-keys': string[];
    'last-epoch-in-committee': number;
    'min-self-delegation': string;
    'max-total-delegation': string;
    rate: string;
    'max-rate': string;
    'max-change-rate': string;
    'update-height': number;
    name: string;
    identity: string;
    website: string;
    'security-contact': string;
    details: string;
    'creation-height': number;
    address: string;
    delegations: Delegation[];
    hasLogo: boolean;
    self_stake: string;
    total_stake: string;
    average_stake: string;
    average_stake_by_bls: string;
    remainder: string;
    voting_power?: any;
    signed_blocks: number;
    blocks_should_sign: number;
    uctDate: Date;
    index: number;
    active_nodes: number;
    elected_nodes: number;
    active: boolean;
    last_apr: string;
    epoch_apr: EpochApr[];
    lifetime_reward_accumulated: string;
    uptime_percentage: number;
    apr: number;
}