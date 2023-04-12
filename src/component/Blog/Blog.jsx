import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
           
           <div className='matchingNav'>
            <h3 className='title'>Blogs</h3>
           </div>

        <div className='blogContainer'>

            <div className='blog'>
            <h4>When should you use context API?</h4>
            <p>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
            </div>

            <div className='blog'>
            <h4>What is a custom hook?</h4>
            <p>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
            </div>

            <div className='blog'>
            <h4>What is useRef?</h4>
            <p>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
            </div>


            <div className='blog'>
            <h4>What is useMemo?</h4>
            <p>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
            </div>






        </div>
            
        </div>
    );
};

export default Blog;