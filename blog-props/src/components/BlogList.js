import React from "react"
import data from "../data"
import BlogPost from "./BlogPost"


export default function BlogList() {
    const posts = data.map(item=> {
        return (
            <BlogPost
                key={item.id}
                item={item}
            />
        )   
    })
    
    return (
        <div className="BlogList">
            {posts}
            <button type="submit">OLDER POSTS &#8594;</button>
        </div>
    )
}