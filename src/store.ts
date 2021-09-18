import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

type BootboxParams = {
    message: any;
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
        defaultValue: any;
        callback?: (res?: string) => void;
      }
  );
  
export const params: Writable<BootboxParams> =
    window["bootbox.params"] ?? writable(null);
  window["bootbox.params"] = params;