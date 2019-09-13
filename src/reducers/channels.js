import { CHANNELS } from "../actions";
export default function channels(state = [], action = {}) {
  switch (action.type) {
    case CHANNELS: {
      return action.payload;
    }
    default:
      return state;
  }
}
