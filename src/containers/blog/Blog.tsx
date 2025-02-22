import React from 'react'
import CardArticolo from '../shared/cardArticolo/CardArticolo'
import Header from '../shared/header/Header'
import Slider from '../shared/slider/Slider'
import NewsLetter from '../shared/newsLetter/NewsLetter'
import Footer from '../shared/footer/Footer'
import ContactUs from '../shared/contactUs/ContactUs'
import { Link } from 'react-router-dom'


const Blog = () => {
    const dummyPosts = [
        { id: "1", title: "Post 1", description: "Descrizione del post 1", image: "https://via.placeholder.com/370x180" , autore:'Rocco', data:'20.02.2025', categoria:'test'},
        { id: "2", title: "Post 2", description: "Descrizione del post 2", image: "https://via.placeholder.com/370x180" , autore:'Rocco', data:'20.02.2025', categoria:'test'},
        { id: "3", title: "Post 3", description: "Descrizione del post 3", image: "https://via.placeholder.com/370x180", autore:'Rocco', data:'20.02.2025', categoria:'test' },
      ];
    return (
        <>
    
        <Slider/>
        <div className="articles-container">
        {dummyPosts.map((post) => (
             <Link to={`/post/${post.id}`} key={post.id} style={{ textDecoration: "none" }}>
        <CardArticolo  title={post.title} description={post.description} image={post.image} autore={post.autore} dataPost={post.data} categoria={post.categoria} link='google.com'/>

             </Link>
        ))}
     
        </div>
        
        </>
    )
}

export default Blog