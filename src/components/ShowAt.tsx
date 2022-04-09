import React, { useEffect, useState } from 'react';
import { IShowAtProps } from '../types';

const ShowAt: React.FC<IShowAtProps> = ({ date, children }) => {
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const timerMilliseconds: number = date.getTime() - Date.now();

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;

    if (timerMilliseconds >= 0) {
      timerId = setTimeout(() => setShowMessage(true), timerMilliseconds);
    }

    return () => clearTimeout(timerId);
  }, []);

  return showMessage && children;
};

export default ShowAt;
