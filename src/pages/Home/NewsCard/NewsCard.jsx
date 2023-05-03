import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaEye, FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';


const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } = news;
    // console.log(_id)
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='ms-3 flex-grow-1'>
                    <p className='fw-semibold mb-0 pt-3'>{author?.name}</p>
                    <p><small>{moment(author?.published_date).format('YYYY-MM-DD')}</small></p>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}><small>Read More</small></Link></>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={rating.number}
                        readonly
                        emptySymbol={<FaRegStar />}
                        placeholderSymbol={<FaStar className='text-danger' />}
                        fullSymbol={<FaStar />}
                    />
                    <span>  {rating.number}</span>
                </div>
                <div>
                    <FaEye></FaEye> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;