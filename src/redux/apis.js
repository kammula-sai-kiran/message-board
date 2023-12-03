import axios from "axios";
import { setAllMessages, setSelectedMessageIds, setSelectedSort } from "./reducers";

export const fetchAllMessages = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      "https://mapi.harmoney.dev/api/v1/messages/",
      {
        headers: {
          Authorization: "avqHZS7asLJVGpA7",
        },
      }
    );
    const allMessages = response.data;
    dispatch(setAllMessages(allMessages));
  } catch (error) {
    console.error(error.message);
  }
};

export const postMessage = (text) => async (dispatch, getState) => {
  try {
    const state = getState();

    const response = await axios.post(
      "https://mapi.harmoney.dev/api/v1/messages/",
      { text },
      {
        headers: {
          Authorization: "avqHZS7asLJVGpA7",
          "Content-Type": "application/json",
        },
      }
    );
    const newMessageData = response.data;
    const oldAllMessages = state.messageBoard.allMessages;
    const newAllMessageData = [...oldAllMessages, newMessageData];
    dispatch(setAllMessages(newAllMessageData));
    dispatch(setSelectedSort(""));
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteMessages = (ids) => async (dispatch, getState) => {
  try {
    const state = getState();
    const generateRequest = (id) => {
      return axios.delete(`https://mapi.harmoney.dev/api/v1/messages/${id}/`, {
        headers: {
          Authorization: "avqHZS7asLJVGpA7",
        },
      });
    };

    const allRequests = ids?.map((id) => generateRequest(id));
    const responses = await Promise.all(allRequests);
    const oldAllMessages = state.messageBoard.allMessages;
    const oldSelectedIds = state.messageBoard.selectedMessageIds;
    const newAllMessageData = oldAllMessages.filter(message => !ids?.includes(message.id))
    const newSelectedIds = oldSelectedIds.filter(id => !ids?.includes(id))

    dispatch(setAllMessages(newAllMessageData));
    dispatch(setSelectedMessageIds(newSelectedIds));


  } catch (error) {
    console.error(error.message);
  }
};
