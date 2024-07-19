import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgArticulo from '../assets/images/ahorro2.png'

const ArticuloContent= () => {
    return (
        <div>
        
        <h4 class="text-uppercase text-center fw-bolder">Titulo de articulo</h4>
        
        
        <div  class="text-center">
        <img src={ImgArticulo} class="img-fluid" style={{height:'300px', width:'auto'}} alt=''/>
        </div>

        <div>
        <p class="fw-lighter" style={{margin:'20px', textAlign: 'justify'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et sapien lectus. Phasellus quis sagittis ipsum, a ullamcorper ipsum. Donec eget velit at ex consectetur semper. Nam commodo mattis quam, posuere malesuada tellus dapibus in. Suspendisse viverra interdum mi, ut vehicula tortor gravida a. Suspendisse potenti. Nulla elementum commodo neque non hendrerit. Etiam pulvinar vulputate nulla laoreet facilisis. Cras fermentum aliquam vehicula. Duis viverra suscipit sapien ac venenatis. Maecenas iaculis orci felis.</p>  
        <p class="fw-lighter" style={{margin:'20px', textAlign: 'justify'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et sapien lectus. Phasellus quis sagittis ipsum, a ullamcorper ipsum. Donec eget velit at ex consectetur semper. Nam commodo mattis quam, posuere malesuada tellus dapibus in. Suspendisse viverra interdum mi, ut vehicula tortor gravida a. Suspendisse potenti. Nulla elementum commodo neque non hendrerit. Etiam pulvinar vulputate nulla laoreet facilisis. Cras fermentum aliquam vehicula. Duis viverra suscipit sapien ac venenatis. Maecenas iaculis orci felis. consectetur adipiscing elit. Integer et sapien lectus. Phasellus quis sagittis ipsum, a ullamcorper ipsum. Donec eget velit at ex consectetur semper. Nam commodo mattis quam, posuere malesuada tellus dapibus in. Suspendisse viverra interdum mi, ut vehicula tortor gravida a. Suspendisse potenti. Nulla elementum commodo neque non hendrerit. Etiam pulvinar vulputate nulla laoreet facilisis. Cras fermentum aliquam vehicula. Duis viverra suscipit sapien ac venenatis. Maecenas iaculis orci felis.</p>
        </div>
        </div>
    );
};

export default ArticuloContent;
