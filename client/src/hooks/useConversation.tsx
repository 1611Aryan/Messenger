import { useState, useEffect } from "react";

//!Doneeeeeeeeeeeeeeeeeeeeeeeeeeee

const useConversation = (
  contacts: {
    name: string;
    id: string;
    lastText: string;
    img: string;
  }[],
  id: null | string = null
) => {
  const [conversationId, setConversationId] = useState<string>();

  const [conversation, setConversation] = useState<null | {
    name: string;
    id: string;
    lastText: string;
    img: string;
  }>(() => {
    return contacts.filter(contact => contact.id === conversationId)[0];
  });

  useEffect(() => {
    if (conversationId !== null)
      setConversation(
        contacts.filter(contact => contact.id === conversationId)[0]
      );
    else setConversation(null);
  }, [conversationId, contacts]);

  return [conversation, setConversationId];
};

export default useConversation;
