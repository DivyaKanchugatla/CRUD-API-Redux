import { useEffect,useState } from 'react';
import {nanoid} from "nanoid"
import './App.css';
import { fetchPosts,deletePosts,updatePosts } from './store/actions/Actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [update,setUpdate] = useState("")
  const [show,setShow] = useState(false)
  const data = useSelector(state=>state.reducers.posts)
  const dispatch = useDispatch()
  console.log(data)
  useEffect(()=>{
    dispatch(fetchPosts())
  },[dispatch])
  const handleDeletePost = (id) =>{
    dispatch(deletePosts(id))
  }
  const handleUpdatePost = (id) => {
    const newPost = {
      id:id,
      title:update,
      body:"changed",
      userId:nanoid()
    }
    dispatch(updatePosts(id,newPost))
    setShow(false)
  }
  return (
    <div className="App">
      {data.map((each)=>{
        return(
          <div key={each.id}>{each.id}
           {!show?<button onClick={()=>setShow(true)}>update</button>:(<div><input type="text" value={update} onChange={(e)=>setUpdate(e.target.value)}/> <button onClick={()=>handleUpdatePost(each.id)}>save</button> </div>)}
           <button onClick={() => handleDeletePost(each.id)}>Delete</button>
             
          </div>
        )
      })}
    </div>
  );
}

export default App;
