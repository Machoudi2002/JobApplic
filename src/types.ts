export type jobInfo = {
    id?: object;
    title: string;
    description: string;
    date?: string;
}

export type jobApp = {
    fullname: string;
    email: string;
    phoneNumber: string;
    linkedinURL: string;
    portfolioURL?: string;
    experience: number;
}

export type JobObject = {
    _id: object;
    title: string;
    description: string;
    date: string;
}

export type LoginData = {
    email: string;
    password: string;
}