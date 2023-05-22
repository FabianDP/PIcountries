import {
  GET_ALLC,
  GET_DETC,
  GET_ACT,
  ORDER_CARDS,
  GET_NAME,
  POBLATION_CARD,
  FILTER_CONTINETES,
  FILTER_Activi,
} from "./actions-type";

const initialState = {
  allActivity: [],
  allCountrie: [],
  oneActivity:[],
  filterCountrie: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALLC:
      return {
        ...state,
        allCountrie: action.payload,
        filterCountrie: action.payload,
      };

    case GET_DETC:
      return {
        ...state,
        allActivity: action.payload,
      };

    case GET_ACT:
      return {
        ...state,
        oneActivity: action.payload,
      };

    case GET_NAME:
      return {
        ...state,
        allCountrie: action.payload,
        filterCountrie: action.payload,
      };

    case ORDER_CARDS:
      const orderedCountrie = [...state.filterCountrie].sort((a, b) =>
        action.payload === "A" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      );

      return {
        ...state,
        filterCountrie: orderedCountrie,
      };

    case POBLATION_CARD:
      const sortedByPopulation = [...state.filterCountrie].sort((a, b) =>
        action.payload === "PA" ? b.population - a.population : a.population - b.population
      );

      return {
        ...state,
        filterCountrie: sortedByPopulation,
      };

    case FILTER_CONTINETES:
      const filteredByContinent = state.allCountrie.filter(
        (elemento) => elemento.continents === action.payload
      );

      return {
        ...state,
        filterCountrie: filteredByContinent,
      };

    case FILTER_Activi:
      const filteredByActivity = state.allCountrie.filter((game) =>
        game.activities.some((genre) => genre.name === action.payload)
      );

      return {
        ...state,
        filterCountrie: filteredByActivity,
      };

    default:
      return state;
  }
};

export default reducer;