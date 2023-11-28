import { useGetUsersQuery } from "../store/api/userApi";

const Users = () => {
  const { data, error, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!data || error) {
    return <div>Error</div>;
  }

  return (
    <div>
      {data.map((user) => {
        return <div key={user.id}>{user.firstname}</div>;
      })}
    </div>
  );
};

export default Users;
