export interface IDropdownOptions{
    value : string,
    displayValue : string
}

export interface INavItemProps {
    link: string,
    label: string,
    strict? : boolean,
    hideForVendors?: boolean
}

export interface IGroup{
    id: number | string,
    name: string,
    isActive : boolean,
    createdAt?: string,
    updatedAt?: string
}

interface IUserMetaData{
    key: string,
    value? : string
}

export interface IAgent{
    id: number | string,
    group : IGroup,
    uid : string,
    userType : string,
    metaData?: IUserMetaData[],
    firstName?: string,
    groupName?: string
    lastName?: string,
    gender?: string,
    ageGroup?: string,
    accent?: string,
    isActive?: boolean,
    createdAt?: string,
    updatedAt?: string
}

export interface IAppState{
    isLoggedIn : boolean,
    user: IAgent | null | undefined,
    errors : any[]
}


export interface ICampaignBatch{
    label: string,
    enableClipboard: boolean,
    id: number | string,
    name: string,
    isActive : boolean,
    group?: IGroup,
    itemsCount: number
    qaedCount: number
    leadReviewCount: number,
    status: string
}


export interface IFilterOptionValue{
    selector: string,
    value: string[]
}

export interface IFilterOption{
    selector: string,
    options: string[]
}

export interface IDataGatheringGroup{
    corpus: string,
    forceBNFCheck: boolean,
    groupId: string,
    lambdaPathFemale: string,
    lambdaPathMale: string,
    shuffle: boolean,
    targetSpeaker: boolean
}

