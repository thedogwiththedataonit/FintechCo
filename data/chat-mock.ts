import type { ChatData, ChatConversation, ChatUser } from "@/types/chat";

// Current user (Emma Wilson)
const currentUser: ChatUser = {
  id: "emma",
  name: "Emma Wilson",
  username: "@emmaw",
  avatar: "/avatars/user_joyboy.png",
  isOnline: true,
};

// Other users
const users: Record<string, ChatUser> = {
  alex: {
    id: "alex",
    name: "Alex Chen",
    username: "@alexchen",
    avatar: "/avatars/user_krimson.png",
    isOnline: true,
  },
  sarah: {
    id: "sarah",
    name: "Sarah Kim",
    username: "@sarahkim",
    avatar: "/avatars/user_mati.png",
    isOnline: false,
  },
  marcus: {
    id: "marcus",
    name: "Marcus Johnson",
    username: "@marcusj",
    avatar: "/avatars/user_pek.png",
    isOnline: true,
  },
  support: {
    id: "support",
    name: "Support",
    username: "@support",
    avatar: "/avatars/user_krimson.png",
    isOnline: false,
  },
  compliance: {
    id: "compliance",
    name: "Compliance Team",
    username: "@compliance",
    avatar: "/avatars/user_mati.png",
    isOnline: false,
  },
};

// Mock conversations
const conversations: ChatConversation[] = [
  {
    id: "conv-alex",
    participants: [currentUser, users.alex],
    unreadCount: 1,
    lastMessage: {
      id: "msg-alex-1",
      content: "Great work on the Q4 report!",
      timestamp: "2024-07-10T16:00:00Z",
      senderId: "alex",
      isFromCurrentUser: false,
    },
    messages: [
      {
        id: "msg-alex-1",
        content: "Great work on the Q4 report!",
        timestamp: "2024-07-10T16:00:00Z",
        senderId: "alex",
        isFromCurrentUser: false,
      },
    ],
  },
  {
    id: "conv-sarah",
    participants: [currentUser, users.sarah],
    unreadCount: 0,
    lastMessage: {
      id: "msg-sarah-1",
      content: "The compliance review is scheduled for Monday",
      timestamp: "2024-06-06T14:30:00Z",
      senderId: "sarah",
      isFromCurrentUser: false,
    },
    messages: [
      {
        id: "msg-sarah-1",
        content: "The compliance review is scheduled for Monday",
        timestamp: "2024-06-06T14:30:00Z",
        senderId: "sarah",
        isFromCurrentUser: false,
      },
    ],
  },
  {
    id: "conv-marcus",
    participants: [currentUser, users.marcus],
    unreadCount: 0,
    lastMessage: {
      id: "msg-marcus-last",
      content: "I'll review the portfolio analysis",
      timestamp: "2024-06-06T12:15:00Z",
      senderId: "emma",
      isFromCurrentUser: true,
    },
    messages: [
      {
        id: "msg-marcus-1",
        content: "Hey Emma",
        timestamp: "2024-06-06T12:05:00Z",
        senderId: "marcus",
        isFromCurrentUser: false,
      },
      {
        id: "msg-marcus-2",
        content: "Did you see the new client onboarding request?",
        timestamp: "2024-06-06T12:05:00Z",
        senderId: "marcus",
        isFromCurrentUser: false,
      },
      {
        id: "msg-marcus-3",
        content: "Yes",
        timestamp: "2024-06-06T12:08:00Z",
        senderId: "emma",
        isFromCurrentUser: true,
      },
      {
        id: "msg-marcus-4",
        content: "What about it?",
        timestamp: "2024-06-06T12:08:00Z",
        senderId: "emma",
        isFromCurrentUser: true,
      },
      {
        id: "msg-marcus-5",
        content: "Can you review the KYC documents?",
        timestamp: "2024-06-06T12:11:00Z",
        senderId: "marcus",
        isFromCurrentUser: false,
      },
      {
        id: "msg-marcus-6",
        content: "By end of day if possible",
        timestamp: "2024-06-06T12:11:00Z",
        senderId: "marcus",
        isFromCurrentUser: false,
      },
      {
        id: "msg-marcus-last",
        content: "I'll review the portfolio analysis",
        timestamp: "2024-06-06T12:15:00Z",
        senderId: "emma",
        isFromCurrentUser: true,
      },
    ],
  },
  {
    id: "conv-support",
    participants: [currentUser, users.support],
    unreadCount: 0,
    lastMessage: {
      id: "msg-support-1",
      content: "Is the API integration complete?",
      timestamp: "2024-06-02T10:00:00Z",
      senderId: "support",
      isFromCurrentUser: false,
    },
    messages: [
      {
        id: "msg-support-1",
        content: "Is the API integration complete?",
        timestamp: "2024-06-02T10:00:00Z",
        senderId: "support",
        isFromCurrentUser: false,
      },
    ],
  },
  {
    id: "conv-compliance",
    participants: [currentUser, users.compliance],
    unreadCount: 0,
    lastMessage: {
      id: "msg-compliance-1",
      content: "Please submit the quarterly audit report",
      timestamp: "2024-06-04T09:30:00Z",
      senderId: "compliance",
      isFromCurrentUser: false,
    },
    messages: [
      {
        id: "msg-compliance-1",
        content: "Please submit the quarterly audit report",
        timestamp: "2024-06-04T09:30:00Z",
        senderId: "compliance",
        isFromCurrentUser: false,
      },
    ],
  },
];

export const mockChatData: ChatData = {
  currentUser,
  conversations,
};
