import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoAppIntegrityViewProps } from './ExpoAppIntegrity.types';

const NativeView: React.ComponentType<ExpoAppIntegrityViewProps> =
  requireNativeViewManager('ExpoAppIntegrity');

export default function ExpoAppIntegrityView(props: ExpoAppIntegrityViewProps) {
  return <NativeView {...props} />;
}
