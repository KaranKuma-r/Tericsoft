function UserCard({ user }) {
  return (
    <div className="card">
        <img  className="user_img" alt={user.id} />
      <h3 className="name">Name:{user.name}</h3>
      <p className="email">Email:{user.email}</p>
    </div>
  );
}

export default UserCard;