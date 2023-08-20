import { TMetaResponse } from "@/entities";

export const metaResponse = <T>(props: T): TMetaResponse<T> => ({
  data: props,
});
