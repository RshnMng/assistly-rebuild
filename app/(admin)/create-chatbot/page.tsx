"use client";

import Avatar from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CREATE_CHATBOT } from "@/app/api/graphql/mutations/mutations";
import { useMutation } from "@apollo/client/react";
import { useUser } from "@clerk/nextjs";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import CreateChatbotData from "@/types/types";
//
function CreateChatbot() {
  const { user } = useUser();
  const [name, setName] = useState("");
  const router = useRouter();

  const [createChatbot, { data, loading, error }] =
    useMutation<CreateChatbotData>(CREATE_CHATBOT, {
      variables: {
        clerk_user_id: user?.id,
        name,
      },
    });

  console.log(user, "user");
  console.log(name, "name");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const result = await createChatbot({
        variables: {
          clerk_user_id: user?.id,
          name,
          created_at: new Date().toISOString(),
        },
      });

      const chatbotId = result.data?.insertChatbots?.id;

      if (!chatbotId) {
        throw new Error("No chatbot ID returned from mutation");
      }
      setName("");
      router.push(`/edit-chatbot/${result.data?.insertChatbots?.id}`);
    } catch (error) {
      console.log(error, "error");
    }
  }
  return (
    <div className="w-3/4 bg-white flex flex-col items-center justify-center md:flex-row justify-self-center md:space-x-5 p-10 rounded-md m-10">
      <Avatar seed="create-chatbot" />

      <div>
        <h1 className="text-xl lg:text-3xl font-semibold">Create</h1>
        <h2 className="font-light">
          Create a new chatbot to assist you in your conversations with your
          customers.
        </h2>

        <form
          onSubmit={handleSubmit}
          className=" flex flex-col md:flex-row gap-2 mt-5"
        >
          <Input
            placeholder="Chatbot Name..."
            className="max-w-lg"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Button type="submit" disabled={loading || !name}>
            {loading ? "Creating Chatbot..." : "Create Chatbot"}
          </Button>
        </form>

        <p>Example: Customer Support Chatbot</p>
      </div>
    </div>
  );
}
export default CreateChatbot;
