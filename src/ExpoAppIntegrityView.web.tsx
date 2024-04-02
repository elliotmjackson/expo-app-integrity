import * as React from 'react';

import { ExpoAppIntegrityViewProps } from './ExpoAppIntegrity.types';

export default function ExpoAppIntegrityView(props: ExpoAppIntegrityViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
