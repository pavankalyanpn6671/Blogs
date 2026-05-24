import './home.css'
import BannerPage from '../../Components/Banner/banner'
import TrendingBlogCard from '../../Components/trending-blogs'
import { Link } from 'react-router-dom'
import trendingBlogs from '../../Utils/trending-blogs'
function HomePage(){
    const categoryBlogs = [
        {
        key:0,
        title:"Exploring the Mountains of Switzerland",
        category:"travel",
        content:"Traveling through the Swiss Alps offers breathtaking landscapes, charming villages, scenic train routes, and unforgettable adventures for nature lovers and photographers around the world.",
        previewContent:"A beautiful journey through the Swiss Alps and stunning mountain landscapes.",
        image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        },

        {
        key:1,
        title:"Future of Artificial Intelligence",
        category:"technology",
        content:"Artificial intelligence is rapidly transforming industries through automation, machine learning, and smart systems that improve productivity and decision making.",
        previewContent:"How AI is changing the future of technology and innovation.",
        image:"https://images.unsplash.com/photo-1518770660439-4636190af475"
        },

        {
        key:2,
        title:"Delicious Italian Pasta Recipes",
        category:"food",
        content:"Italian cuisine is famous for its pasta dishes made with simple ingredients, rich sauces, and authentic flavors loved by people worldwide.",
        previewContent:"Discover classNameic Italian pasta recipes and traditional flavors.",
        image:"https://images.unsplash.com/photo-1525755662778-989d0524087e"
        },
        {
        key:3,
        title:"Daily Habits for a Better Lifestyle",
        category:"lifestyle",
        content:"Healthy daily habits like exercise, meditation, balanced diet, and proper sleep can improve overall well being and happiness.",
        previewContent:"Simple lifestyle habits that can improve your daily life.",
        image:"https://images.unsplash.com/photo-1499209974431-9dddcece7f88"
        },

        {
        key:4,
        title:"Importance of Online Learning",
        category:"education",
        content:"Online learning platforms allow students to access courses from anywhere, making education flexible and accessible in the digital era.",
        previewContent:"Why online education is becoming popular worldwide.",
        image:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
        },
    ]
    return(
        <>
            <BannerPage />
            <div className='card-section-container'>
                <h1 className='text-center'>Card section </h1>
                <div className="card-section">
                    {
                        categoryBlogs.map(category =>{
                            return(
                                <div className="card" style={{width: '18rem'}} key={category.key}>
                                    <img className="card-img-top" src={category?.image} alt="Card image cap" height={'170px'}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{category?.title}</h5>
                                        <h5 className="text-muted">{category?.category}</h5>
                                        <p className="card-text">{category?.previewContent}</p>
                                        <Link to={`/category-blog/${category?.category}`} className="btn btn-primary w-100">View Category</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="trending-blog-container">
                <h1 className='text-center'>Trending Blogs section </h1>
                <div className="trending-blog-section">
                    {
                        trendingBlogs.map((blog,index) =>{
                            return <TrendingBlogCard blogData={blog} key={index}/>
                        })
                    }  
                </div>               
            </div>
            
        </>
    )
}

export default HomePage;