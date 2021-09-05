declare module '*.svelte' {

  type BootboxParams = {
    message: string;
  } & (
      | {
        type: "alert";
        callback?: () => void;
      }
      | {
        type: "confirm";
        callback?: (res: boolean) => void;
      }
      | {
        type: "prompt";
        defaultValue: string;
        callback?: (res?: string) => void;
      }
    );

  export const bootbox = {
    alert: (message = "") =>
      new Promise<void>((callback) =>
        params.set({
          type: "alert",
          message,
          callback,
        })
      ),
    confirm: async (message = "") =>
      new Promise<boolean>((callback) =>
        params.set({
          type: "confirm",
          message,
          callback,
        })
      ),
    prompt: (message = "", defaultValue = "") =>
      new Promise<string | undefined>((callback) =>
        params.set({
          type: "prompt",
          message,
          defaultValue,
          callback,
        })
      ),
  };
}