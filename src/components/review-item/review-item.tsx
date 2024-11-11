import { Review } from "../../types"
import { formatDateToMonthYear } from "../../helpers/format-date-to-month-year";

type ReviewItemProps = {
    review: Review
}

function ReviewItem({review} : ReviewItemProps) {
    return (
        <li className="reviews__item">
            <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                    <img className="reviews__avatar user__avatar" src={review.author.avatarSource} width="54" height="54" alt="Reviews avatar" />
                </div>
                <span className="reviews__user-name">
                    {review.author.name}
                </span>
            </div>
            <div className="reviews__info">
                <div className="reviews__rating rating">
                    <div className="reviews__stars rating__stars">
                        <span style={{width: `${20 * review.rating}%`}}></span>
                        <span className="visually-hidden">Rating</span>
                    </div>
                </div>
                <p className="reviews__text">
                    {review.text}
                </p>
                <time className="reviews__time" dateTime={review.date.toISOString().split('T')[0]}>{formatDateToMonthYear(review.date)}</time>
            </div>
        </li>
    );
}

export default ReviewItem;