export const CHANNELS = "CHANNELS";

export function setChannels(channels) {
  return {
    type: CHANNELS,
    payload: channels
  };
}
