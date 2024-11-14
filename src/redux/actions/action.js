import * as actions from "./actionsTypes"

export const SetUser=(paylaod)=>{
    return{
        type:actions.SET_USER,
        user:paylaod
    }
}
export const SetLoading=(status)=>{
  return{
    type:actions.SET_LOADING_STATUS,
    status:status,
  }
}
export const GetArticles=(payload)=>{
    return{
        type:actions.GET_ARTICLES,
        payload:payload,
    }
}