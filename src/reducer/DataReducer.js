export const DataReducer = (state, { type, payload }) => {
  switch (type) {
    case "InitialDataFetch": {
      return {
        ...state,
        allMeetups: payload,
      };
    }
    case "SetFilterData": {
      return {
        ...state,
        filteredMeetups: payload,
      };
    }

    case "SetCurrentEvent": {
      console.log(payload);
      return {
        ...state,
        currentMeetup: payload,
      };
    }

    default:
      return state;
  }
};
