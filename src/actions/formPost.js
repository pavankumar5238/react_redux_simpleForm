//import * as api from '../api';

//action creater

export const getPosts=()=>async(dispatch,getPosts)=>{
    try {
        const data = getPosts;
        dispatch({type:'FETCH_ALL', payload:data})
        
    } catch (error) {
        console.log(error.message)
    }
}

export const createPost=(posts)=> async(dispatch)=>{
    try {
       // const {data}= await api.createPost(post);
        
        const  data  = posts;
        console.log(data.firstName);
        console.log(posts)
       
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error)
    }

}