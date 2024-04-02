import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoAppIntegrity.web.ts
// and on native platforms to ExpoAppIntegrity.ts
import ExpoAppIntegrityModule from './ExpoAppIntegrityModule';
import ExpoAppIntegrityView from './ExpoAppIntegrityView';
import { ChangeEventPayload, ExpoAppIntegrityViewProps } from './ExpoAppIntegrity.types';

// Get the native constant value.
export const PI = ExpoAppIntegrityModule.PI;

export function hello(): string {
  return ExpoAppIntegrityModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoAppIntegrityModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoAppIntegrityModule ?? NativeModulesProxy.ExpoAppIntegrity);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoAppIntegrityView, ExpoAppIntegrityViewProps, ChangeEventPayload };
