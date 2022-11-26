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
    <img src="images/110.jpeg"/>
    <span>CSS</span>
  </div>
  <div class="box_gallery">
    <img src="images/111.jpeg"/>
    <span>Image</span>
  </div>
  <div class="box_gallery">
    <img src="images/112.jpeg"/>
    <span>Hover</span>
  </div>
  <div class="box_gallery">
    <img src="images/113.jpeg"/>
    <span>Effect</span>
  </div>
</div>
</section>
    </>
  )
}

export default Gallery