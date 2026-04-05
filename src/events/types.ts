export interface Event {
  name: string;
  execute: (...args: any[]) => Promise<void>;
}
