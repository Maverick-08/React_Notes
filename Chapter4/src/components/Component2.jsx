import React from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobNotificationAtom, messageNotificationAtom, networkNotificationAtom, notificationSelector, profileAtom } from '../store/atoms/atoms2'
import { useMemo } from 'react';

export default function Component2() {
  return (
    <div>
        <RecoilRoot>
            <MainComponent />
        </RecoilRoot>
    </div>
  )
}

function MainComponent(){
    const networkCount = useRecoilValue(networkNotificationAtom);
    const jobCount = useRecoilValue(jobNotificationAtom)
    const profileCount = useRecoilValue(profileAtom)

    // Collective notification count
    // METHOD 1 : useMemo()
    // const notificationCount = useMemo(()=>{
    //     return (networkCount+jobCount+messageCount+profileCount);
    // },[networkCount,messageCount,jobCount,profileCount])

    // METHOD 2 : selector
    const notificationCount = useRecoilValue(notificationSelector)

    return(
        <>
            <button>Network ({(networkCount >= 100)? "99+":networkCount})</button>
            <button>Jobs ({jobCount})</button>
            <Message />
            <button>Notification ({notificationCount})</button>
            <button>Profile ({profileCount})</button>
        </>
    )
}

function Message(){
    const [messageCount,setMessageCount] = useRecoilState(messageNotificationAtom)

    return(
        <>
            <button onClick={()=>setMessageCount(x=>x+1)}>Message ({messageCount})</button>
        </>
    )
}