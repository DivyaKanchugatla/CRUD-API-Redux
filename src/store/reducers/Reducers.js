import { DELETE_POSTS_SUCCESS, FETCH_POSTS_SUCCESS ,UPDATE_POSTS_SUCCESS} from "../actions/Actions";

const initialState = {
    posts:[]
}

const postsReducer = (state=initialState,actions) => {
    switch(actions.type){
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts:actions.payload
            }
        case DELETE_POSTS_SUCCESS:
            return {
                ...state,
                posts:state.posts.filter((post) => post.id !== actions.payload)}
        case UPDATE_POSTS_SUCCESS:
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post.id === actions.payload.id ? actions.payload : post
                )
            }
        default:
            return state
    }
}
export default postsReducer;