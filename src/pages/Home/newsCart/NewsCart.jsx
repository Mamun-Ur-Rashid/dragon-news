import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaShareAlt,  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';
import useTitle from '../../../hook/useTitle';


const NewsCart = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;
    useTitle('News Details')
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='ms-2 flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    <p><small>{moment(author?.published_date).format('yyyy-MM-D')}</small></p>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <> {details} </> :
                        <>{details.slice(0, 250)}.... <Link to={`/news/${_id}`}>Read More</Link></>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1 d-flex align-items-center gap-4'>
                    <Rating
                        style={{ maxWidth: 150 }}
                        value={rating.number}
                        readOnly
                    />
                    <small> {rating.number}</small>
                </div>
                <div>
                    <FaEye></FaEye> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCart;