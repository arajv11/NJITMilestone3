function customerRating(props) {
  const { customerRating, reviewCount } = props;
  return (
    <div className="customerRating">
      <span>
        <i
          className={
            customerRating >= 1
              ? 'fas fa-star'
              : customerRating >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            customerRating >= 2
              ? 'fas fa-star'
              : customerRating >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            customerRating >= 3
              ? 'fas fa-star'
              : customerRating >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            customerRating >= 4
              ? 'fas fa-star'
              : customerRating >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            customerRating >= 5
              ? 'fas fa-star'
              : customerRating >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <br />
        {reviewCount} reviews
      </span>
      <br />
      <br />
    </div>
  );
}

export default customerRating;
