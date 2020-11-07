export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQDRVsZShMwRaT0BMSu3LKJpxzaJvgUAw4xdzyT47Q36OBvULxfs3EIgTAWrbfn64E2IOaw7sNW3h6fnFgDlmG70vdIO0nlcZrU94A3GAvYAw2DlcQ_9NcWlLsSLeuDDjNNJSZU0wKl9D7X2XEKWPOAGW8sfiCSyysx151a_eRDBmDZg",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
