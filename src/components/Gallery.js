import React from 'react'
import "../Gallery.css"

const Gallery = () => {
  return (
    <>
    <section id='gallery' className='mb-5'>
    <h3 id='heading_gallery'>GALLERY</h3>
    <div id='line_gallery'></div>
    <hr className='invisible' />
     <div class="container_gallery row mx-auto">
  <div class="box_gallery rounded-5 col-12 col-md-6 col-lg-4 mx-auto py-3">
    <img className='rounded-5' src="images/webp/12.jpg"/>
    {/* <span>CSS</span> */}
  </div>
  <div class="box_gallery rounded-5 col-12 col-md-6 col-lg-4 mx-auto py-3">
    <img className='rounded-5' src="images/webp/9.jpg"/>
    {/* <span>Image</span> */}
  </div>
  <div class="box_gallery rounded-5 col-12 col-md-6 col-lg-4 mx-auto py-3">
    <img className='rounded-5' src="images/webp/1.jpg"/>
    {/* <span>Hover</span> */}
  </div>
  <div class="box_gallery rounded-5 col-12 col-md-6 col-lg-4 mx-auto py-3">
    <img className='rounded-5' src="images/webp/2.jpg"/>
    {/* <span>Effect</span> */}
  </div>
</div>
     <div class="container_gallery row mx-auto">
  <div class="box_gallery rounded-5 col-12 col-md-6 col-lg-4 mx-auto py-3">
    <img className='rounded-5' src="images/webp/3.jpg"/>
    {/* <span>CSS</span> */}
  </div>
  <div class="box_gallery rounded-5 col-12 col-md-6 col-lg-4 mx-auto py-3">
    <img className='rounded-5' src="images/webp/13.jpg"/>
    {/* <span>Image</span> */}
  </div>
  <div class="box_gallery rounded-5 col-12 col-md-6 col-lg-4 mx-auto py-3">
    <img className='rounded-5' src="images/webp/8.jpg"/>
    {/* <span>Hover</span> */}
  </div>
  <div class="box_gallery rounded-5 col-12 col-md-6 col-lg-4 mx-auto py-3">
    <img className='rounded-5' src="images/webp/5.jpg"/>
    {/* <span>Effect</span> */}
  </div>
</div>
   
</section>
    </>
  )
}

export default Gallery