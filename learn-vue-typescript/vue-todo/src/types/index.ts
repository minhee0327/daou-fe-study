// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace VueEvent {
  export interface Input<T extends EventTarget> extends InputEvent {
    target: T;
  }

  export interface KeyBoard<T extends EventTarget> extends InputEvent {
    target: T;
  }
}

// VueEvent.Input
