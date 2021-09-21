import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const { image, title, address, description } = props.meetup;
  return (
    <li className={classes.item}>
      <div>
        <img src={image} alt={title} className={classes.image} />
      </div>
      <div className={classes.content}>
        <h3>{title}</h3>
        <address>{address}</address>
        <p>{description}</p>
      </div>
      <div className={classes.actions}>
        <button>To Favorites</button>
      </div>
    </li>
  );
}

export default MeetupItem;
