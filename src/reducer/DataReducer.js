export const DataReducer = (state, { type, payload }) => {
  switch (type) {
    case "SetFilterData": {
      return {
        ...state,
        filteredMeetups: payload,
      };
    }

    case "SetCurrentEvent": {
      return {
        ...state,
        currentMeetup: payload,
      };
    }

    default:
      return state;
  }
};
