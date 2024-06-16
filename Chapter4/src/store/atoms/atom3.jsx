import { atom, selector } from 'recoil';
import axios from 'axios';

export const notificationsAtom = atom({
  key: 'notifications',
  default: selector({
    key: 'NotificationSelector',
    get: async () => {
      try {
        const res = await axios.get('http://localhost:3000/payload');
        return res.data;
      } catch (error) {
        console.error('Error fetching notifications:', error);
        return { network: 0, jobs: 0, messages: 0, profile: 0 }; // default fallback
      }
    },
  }),
});

export const totalNotifications = selector({
  key: 'totalNotifications',
  get: ({ get }) => {
    const allNotifications = get(notificationsAtom);
    return (
      allNotifications.messages +
      allNotifications.jobs +
      allNotifications.profile +
      allNotifications.network
    );
  },
});