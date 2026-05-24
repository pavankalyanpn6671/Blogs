import './blog.css'
import BannerPage from "../../Components/Banner/banner";
import {useState, useMemo, useEffect} from 'react'
import { Outlet, useParams } from 'react-router-dom';
import trendingBlogs from '../../Utils/trending-blogs'
const dedicatedBlog = ()=>{
    const { title } = useParams(); 
    const [blogDetails, setBlogDetails] = useState({})
    useEffect(()=>{
        trendingBlogs.forEach(blog => {
            if(blog.titleLink === title){
                setBlogDetails(blog)
            }
        })
    },[title])


    return(
        <> 
            <div className="content">
                <h1>Blog Title: <span>{blogDetails.title}</span></h1>
                <h1>Blog Category:<span>{blogDetails.category}</span></h1>
                <h1>Blog Content:<span>{blogDetails.content}</span></h1>
            </div>
           
        </>
    )
}

export default dedicatedBlog;