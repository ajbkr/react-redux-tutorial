import { ADD_ARTICLE } from '../constants/action-types'

export function addArticle (payload) {
  return {
    payload,
    type: ADD_ARTICLE
  }
}
