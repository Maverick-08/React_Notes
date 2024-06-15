import {atom, selector} from 'recoil'

export const networkNotificationAtom = atom({
    key:"networkNotificationAtom",
    default: 102
})

export const jobNotificationAtom = atom({
    key:"jobNotificationAtom",
    default: 10
})

export const messageNotificationAtom = atom({
    key:"messageNotificationAtom",
    default: 20
})

export const profileAtom = atom({
    key:"profileAtom",
    default: 15
})

export const notificationSelector = selector({
    key:"",
    get: ({get})=>{
        return (get(networkNotificationAtom)+get(jobNotificationAtom)+get(messageNotificationAtom)+get(profileAtom));
    }
})

