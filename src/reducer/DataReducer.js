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

    default:
      return state;
  }
};
