import { userImage } from "./comment.module.css";

function UserImage({ user }) {
  return (
    <picture className={userImage}>
      <source srcSet={user.images.webp} type="image/webp" />
      <source srcSet={user.images.png} type="image/png" />
      <img src={user.images.png} alt={`Avatar of ${user.username}`} />
    </picture>
  );
}

export default UserImage;
