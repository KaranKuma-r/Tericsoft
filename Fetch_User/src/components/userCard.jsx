function UserCard({ user }) {
  return (
    <div className="card">
      <h3 className="name">Name:{user.name}</h3>
      <p className="email">Email:{user.email}</p>
    </div>
  );
}

export default UserCard;