// import React from 'react';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Card from 'react-bootstrap/Card';

// const {Body, Img, Footer, Link, Text, Title} = Card

// const Item = (props) => {
//     return (
//         <Col sm={6} md={4} lg= {3}>
//             <Card>
//                 <Img src="http://placehold.it/300x200" />
//                 <Body>
//                     <Title>Producto 1</Title>
//                     <Text>
//                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum sunt esse quia, modi quo vitae quas, saepe in tenetur voluptatibus eaque blanditiis illo corporis aperiam nesciunt vel, amet reiciendis odit!
//                     </Text>
//                 </Body>
//                 <Footer>
//                     <Link href="#">Ver detalle</Link>
//                 </Footer>
//             </Card>
//         </Col>
//     );
// }

// export default Item;

import React from 'react';

const Item = (props) => {
    return (
        <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="shadow-lg bg-gray-100 p-6 rounded-lg">
                <img className="object-contain bg-placeholder h-60 rounded w-full object-center mb-6"
                    src={props.imgUrl} 
                    alt={props.title}
                />
                <h3 className="h-20 tracking-widest text-grey-800 font-bold title-font">
                    {props.title}
                </h3>
                <h2 className="text-lg text-red-600 font-medium title-font mb-4">
                    ${props.price}
                </h2>
                <p className="leading-relaxed text-base">
                    {props.description}
                </p>
                <a href="#" className="text-red-500 inline-flex items-center mt-3">Ver más</a>
            </div>
         </div>
    );
}

export default Item;