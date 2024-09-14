export interface MessageId {
  timestamp: number;
  machine: number;
  pid: number;
  increment: number;
  creationTime: string;
}

export interface Message {
  id: MessageId;
  messageLink: string;
  messageId: string;
  serverId: string;
  userName: string;
  userTag: string;
  comment: string;
  voteCount: number;
  iconUrl: string;
  dateOfSubmission: string;
  voters: string[];
  imageUrl: string;
  quotedMessage: string;
  quotedMessageAuthor: string;
  quotedMessageAvatarLink: string;
  quotedMessageImage: string;
  nickname: string;
  quotedMessageAuthorNickname: string;
  quotedMessageMessageLink: string | null;
}
