import { useEffect, useState } from 'react';
import io from '../services/socket';

export const useSocket = (eventName) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = io();

    socket.on(eventName, (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off(eventName);
      socket.disconnect();
    };
  }, [eventName]);

  return messages;
};
