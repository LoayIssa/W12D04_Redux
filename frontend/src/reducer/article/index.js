/*initialstate */
const initialState = {
    articles :[],
  };
  const articles = (state = initialState, { type, payload }) => {
    switch (type) {
      case 'SET_ARTICLES':
        return { articles: [...payload] };
  
      case 'ADD_ARTICLE':
        
        return { articles: [...state.articles, payload] };
  
      case 'UPDATE_ARTICLE':
        return {
            articles: state.articles.map((elem, i) => {
            if (elem._id === payload._id) {
              return payload;
            }
            return elem;
          }),
        };
  
      
      case 'DELETE_ARTICLE':
  
        return state.articles.filter((elem) => elem._id !== payload._id);
  
      default:
        return state;
    }
  };
  
  export default articles;
  
  /*acation */

  export const setarticles = (articles) => {
    return {
      type: 'SET_ARTICLES',
      payload: articles,
    };
  };
  
  export const createarticles = (newarticles) => {
    return {
      type: 'ADD_ARTICLE',
      payload: newarticles,
    };
  };
  
  export const updatearticles= (updatedarticles) => {
    return {
      type: 'UPDATE_ARTICLE',
      payload: updatedarticles,
    };
  };
  
  export const deletearticles = (id) => {
    return {
      type: 'DELETE_ARTICLE',
      payload: id,
    };
  };