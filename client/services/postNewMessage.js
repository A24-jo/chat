import { Axios } from "@/axios";

// interface NewMessageDTO {
//     message: string;
//     sender: string;
//     receiver: string;
//     type: number;
// }

export async function postNewMessage({ sender, receiver, message, type }) {
  try {
    await Axios.post("/message/create", { sender, receiver, message, type });

    return {
      error: false,
    };
  } catch (error) {
    console.log(error);
    return {
      error: true,
    };
  }
}
