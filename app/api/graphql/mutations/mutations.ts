import { gql } from "@apollo/client";

export const CREATE_CHATBOT = gql`
  mutation CreateChatbot(
    $clerk_user_id: String!
    $name: String!
    $created_at: DateTime!
  ) {
    insertChatbots(
      clerk_user_id: $clerk_user_id
      name: $name
      created_at: $created_at
    ) {
      id
      name
      created_at
    }
  }
`;

export const REMOVE_CHARACTERISTIC = gql`
  mutation MyMutation($id: Int!) {
    deleteChatbot_characteristics(id: $id) {
      id
    }
  }
`;

export const DELETE_CHATBOT = gql`
  mutation DeleteChatbot($id: Int!) {
    deleteChatbots(id: $id) {
      id
    }
  }
`;

export const ADD_CHARACTERISTIC = gql`
  mutation AddCharacteristic(
    $chatbotId: Int!
    $content: String!
    $created_at: DateTime!
  ) {
    insertChatbot_characteristics(
      chatbot_id: $chatbotId
      content: $content
      created_at: $created_at
    ) {
      id
      content
      created_at
    }
  }
`;

export const UPDATE_CHATBOT = gql`
  mutation UpdateChatbot(
    $id: Int!
    $name: String!
    $created_at: DateTime!
    $clerk_user_id: String!
  ) {
    updateChatbots(
      id: $id
      name: $name
      created_at: $created_at
      clerk_user_id: $clerk_user_id
    ) {
      id
      name
      created_at
      clerk_user_id
    }
  }
`;

// clerk.browser.js:16 Clerk: Clerk has been loaded with development keys. Development instances have strict usage limits and should not be used when deploying your application to production. Learn more: https://clerk.com/docs/deployments/overview
// warnOnce	@	clerk.browser.js:16
// load	@	clerk.browser.js:1

// make id of chatbot not be a number make a uuid so its a random stream of characters
//so when a bunch of people use it its a lot more secure
