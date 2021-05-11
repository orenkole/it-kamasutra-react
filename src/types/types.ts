export type PostType = {
    id: number,
    message: String,
    likesCount: Number,
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookignForAJobDescription: string
    fullName: string
    contacts: constactsType
    photos: photosType
}

export type constactsType = {
    github: string
    vk: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type photosType = {
    small: string | null
    large: string | null
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: photosType
}