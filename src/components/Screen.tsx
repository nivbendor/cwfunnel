// src\components\Screen.tsx

import React, { ReactNode } from 'react';

interface ScreenProps {
  children: ReactNode;
}

const styles = {
  Screen: {
    backgroundColor: '#f7f7f7',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
  },
};

const Screen: React.FC<ScreenProps> = ({ children }) => {
  return (
    <div style={styles.Screen}>
      {children}
    </div>
  );
};

export default Screen;