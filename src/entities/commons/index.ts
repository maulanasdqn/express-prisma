export type TMetaResponse<T = null | undefined> = {
  status?: number;
  message?: string;
  data?: T;
};

export type TMetaErrorResponse = {
  status: number;
  message: string;
};
