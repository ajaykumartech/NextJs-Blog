import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import getFeaturedPosts from "../lib/posts-util";
import Head from "next/head";

function HomePage(props){



 return (
    <Fragment>
        <Head>
            <title>Ajay's Blog</title>
            <meta 
            name="description"
            content="Ajay's personal blog where he writes about programming, web development and other topics."
            />
        </Head>
        <Hero />
       <FeaturedPosts posts={props.posts} />
    </Fragment>
 )
 }

export function getStaticProps(){
    const featuredPosts = getFeaturedPosts();

    return{
        props:{
            posts:featuredPosts
        },
        revalidate : 60
    }
}

export default HomePage;
