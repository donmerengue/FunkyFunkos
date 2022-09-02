//react
import React from "react";
import { useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getCollections } from "../store/CollectionsState";
import { getUsers } from "../store/UsersState";

const AdminUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCollections());
    dispatch(getUsers());
  }, []);
  const collections = useSelector((state) => state.collections.collectionsList);
  const collectionsState = useSelector((state) => state.collections);
  const users = useSelector((state) => state.users.usersList);
  const usersState = useSelector((state) => state.users);

  if (collectionsState.loading || usersState.loading) {
    return <div>Loading...</div>;
  }
  if (collectionsState.error || usersState.error) {
    return (
      <div>
        Error:{" "}
        {collectionsState.error.message
          ? collectionsState.error.message
          : usersState.error.message}
      </div>
    );
  }
  return (
    <div>
      {collections.map((collection) => {
        return <li key={collection.id}>{collection.name}</li>;
      })}
      <form>
        <input type="text" placeholder="Collection Name"></input>
        <input type="submit" value="Create New Collection"></input>
      </form>

      {users.map((user) => {
        return (
          <li key={user.id}>
            {user.fullname}
            {user.email}
            {user.admin}
          </li>
        );
      })}
    </div>
  );
};

export default AdminUser;
