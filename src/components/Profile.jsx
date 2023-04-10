export const ProfileCard = ({ description } ) => {
        return (
                <div class="profile">
  <div class="description">
    <img
      src={description.avatar}
      alt="User avatar"
      class="avatar"
    />
    <p class="name">{description.username}</p>
    <p class="tag">{description.tag}</p>
    <p class="location">{description.location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">followers</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">views</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">likes</span>
    </li>
  </ul>
</div>
        )

}