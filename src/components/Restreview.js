import React, { useState } from 'react'; 
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronDown, faChevronUp, faUsers } from '@fortawesome/free-solid-svg-icons';
import StarRating from './StarRating';

function Restreview({reviews}) {
    const [open, setOpen] = useState(false);
    
    if (!reviews || reviews.length === 0) {
        return (
            <div className="no-reviews">
                <FontAwesomeIcon icon={faStar} className="no-reviews-icon" />
                <p>No reviews yet. Be the first to review this restaurant!</p>
            </div>
        );
    }

    // Calculate average rating
    const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
    
    return (
        <div className="reviews-container">
            <div className="reviews-summary">
                <div className="rating-overview">
                    <div className="average-rating">
                        <span className="rating-number">{averageRating.toFixed(1)}</span>
                        <div className="stars-display">
                            <StarRating value={averageRating} size="large" />
                        </div>
                        <span className="total-reviews">Based on {reviews.length} reviews</span>
                    </div>
                </div>
                
                <Button 
                    variant="outline-primary" 
                    onClick={() => setOpen(!open)}
                    className="toggle-reviews-btn"
                    aria-controls="reviews-collapse"
                    aria-expanded={open}
                >
                    <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
                    {open ? ' Hide Reviews' : ' Show All Reviews'}
                </Button>
            </div>

            <Collapse in={open}>
                <div id="reviews-collapse" className="reviews-list">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <div className="review-header">
                                <div className="reviewer-info">
                                    <FontAwesomeIcon icon={faUsers} className="reviewer-icon" />
                                    <span className="reviewer-name">{review.name}</span>
                                </div>
                                <div className="review-rating">
                                    <StarRating value={review.rating} />
                                    <span className="rating-value">{review.rating}</span>
                                </div>
                            </div>
                            <div className="review-date">{review.date}</div>
                            {review.comments && (
                                <div className="review-comments">
                                    <p>{review.comments}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Collapse>
        </div>
    );
}

export default Restreview;