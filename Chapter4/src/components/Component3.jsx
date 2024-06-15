import React from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { notificationsAtom, totalNotifications } from '../store/atoms/atom3';

export default function Component3() {
  return (
    <div>
      <RecoilRoot>
        <MainComponent />
      </RecoilRoot>
    </div>
  );
}

function MainComponent() {
  const notifications = useRecoilValue(notificationsAtom);
  const allNotifications = useRecoilValue(totalNotifications);

  return (
    <>
      <button>
        Network ({notifications.network >= 100 ? '99+' : notifications.network})
      </button>
      <button>Jobs ({notifications.jobs})</button>
      <button>Notification ({allNotifications})</button>
      <Message />
      <button>Profile ({notifications.profile})</button>
    </>
  );
}

function Message() {
  const [notifications, setNotifications] = useRecoilState(notificationsAtom);

  return (
    <button>Message ({notifications.messages})</button>
  );
}


