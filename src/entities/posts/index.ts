import { TMetaResponse } from "@/entities";

export type TPostRequest = {
  id?: string;
  title: string;
  content?: string | undefined | null;
  published?: boolean;
  authorId: string;
};

export type TPostResponse = TMetaResponse<TPostRequest[]>;

export type TPostSingleResponse = TMetaResponse<TPostRequest | null>;
