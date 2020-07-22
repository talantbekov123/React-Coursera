import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish({dish}) {
    if(!dish) {
        return(
            <div></div>
        );
    }

    return(
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments({dish}) {
    if(!dish) {
        return(
            <div></div>
        );
    }
    
    const comments = dish.comments.map((comment) => {
        return (
            <div key={comment.id}>
                <div>{comment.comment}</div>
                <div> --{comment.author}, {comment.date}</div>
                <br></br>
            </div>
        );
    });

    return(
        <div>
            <h2>Comments</h2>
            { comments }
        </div>
    );
     
}

function Dishdetail(props) {
    return (
        <div className="container">
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish}/>
                </div>
                <div  className="col-12 col-md-5 m-1">
                    <RenderComments dish={props.dish} />
                </div>
            </div>
        </div>
    )
}

export default Dishdetail;
