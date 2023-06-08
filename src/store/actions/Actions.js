import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS"
export const DELETE_POSTS_SUCCESS = "DELETE_POSTS_SUCCESS"
export const UPDATE_POSTS_SUCCESS = "UPDATE_POSTS_SUCCESS"

export const fetchPosts = () => {
    return async (disptch) => {
        return await axios.get(API_URL).then((response)=>{
            disptch({
                type:FETCH_POSTS_SUCCESS,
                payload:response.data
            })
        })
    }
}
export const deletePosts = (id) => {
    return async (dispatch) => {
        return await axios.delete(`${API_URL}/${id}`).then(()=>{
            dispatch({
                type:DELETE_POSTS_SUCCESS,
                payload:id
            })
        })
    }
}
export const updatePosts = (id,newPost) => {
    return async (dispatch) => {
        return await axios.put(`${API_URL}/${id}`,newPost).then((res)=>{
            dispatch({
                type:UPDATE_POSTS_SUCCESS,
                payload:res.data
            })
        })
    }
}