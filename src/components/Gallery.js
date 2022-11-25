import React from 'react'
import "../Gallery.css"

const Gallery = () => {
  return (
    <>
    <section id='gallery'>
    <h3 id='heading_gallery'>GALLERY</h3>
    <div id='line_gallery'></div>
     <div class="container_gallery">
  <div class="box_gallery">
    <img src="images/7.jpg"/>
    <span>CSS</span>
  </div>
  <div class="box_gallery">
    <img src="https://source.unsplash.com/1000x802"/>
    <span>Image</span>
  </div>
  <div class="box_gallery">
    <img src="https://source.unsplash.com/1000x804"/>
    <span>Hover</span>
  </div>
  <div class="box_gallery">
    <img src="https://source.unsplash.com/1000x806"/>
    <span>Effect</span>
  </div>
</div>
</section>
    </>
  )
}

export default Gallery