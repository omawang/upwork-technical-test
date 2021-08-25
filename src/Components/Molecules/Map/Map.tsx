import React from 'react';
const WorldMap = require('react-world-map');

export type MapProps = {
  continent: string;
  onChange: (val: string) => void;
};

export const Map = ({ continent, onChange }: MapProps) => {
  return (
    <div style={{ width: '100%' }}>
      <WorldMap selected={continent} onSelect={onChange} />
    </div>
  );
};
