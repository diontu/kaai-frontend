import { apiGet, apiPost } from "@/api/api";

export type ConversationType = {
  id: string;
  title: string;
  created_by: number;
  created_at: string;
};

export type MessageType = {
  id: string;
  content: string;
  user_id: number;
  conversation_id: string;
  created_at: string;
};

export const createConversation = (): ReturnType<
  typeof apiPost<ConversationType>
> => {
  return apiPost<ConversationType>("/conversation");
};

export const getConversations = (): ReturnType<
  typeof apiGet<ConversationType[]>
> => {
  return apiGet<ConversationType[]>("/conversation");
};

export const getMessagesFromConversationId = (
  id: string
): ReturnType<typeof apiGet<MessageType[]>> => {
  return apiGet<MessageType[]>(`/conversation/${id}`);
};
