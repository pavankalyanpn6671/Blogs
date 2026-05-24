import'./index.css'
import { Link } from 'react-router-dom'
function TrendingBlogCard({blogData}){
    return(
        <>
             <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={blogData?.image} alt="Card image cap" height={'170px'}/>
                    <div className="card-body">
                        <h5 className="card-title">{blogData?.title}</h5>
                        <h5 className="text-muted">{blogData?.category}</h5>
                        <p className="card-text">{blogData?.previewContent}</p>
                        <Link to={`/blog/${blogData?.titleLink}`} className="btn btn-success w-100">View Trending Blog</Link>
                    </div>
                </div>
        </>
    )
}
export default TrendingBlogCard;