//react
import React from "react";
import { useEffect, useState } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getCollections } from "../store/CollectionsState";
import { getUsers } from "../store/UsersState";
import { addCollection } from "../store/CollectionsState";

const AdminUser = () => {
  const [collectionInput, SetCollectionInput] = useState('')
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCollections());
    dispatch(getUsers());
  }, []);
  const collections = useSelector((state) => state.collections.collectionsList);

  const users = useSelector((state) => state.users.usersList);
 

  const inputChangeHandler = (e)=>{
    e.preventDefault()
    SetCollectionInput(e.target.value)
  }
  const submitCollectionHandler = (e) =>{
    e.preventDefault()
    dispatch(addCollection(collectionInput))
  }

  return (
    <div>
      <h2>Collections</h2>
      {collections.map((collection) => {
        return <li key={collection.id}>{collection.name}</li>;
      })}
      <form onSubmit={submitCollectionHandler}>
        <input type="text" placeholder="Collection Name" onChange={inputChangeHandler}></input>
        <input type="submit" value="Create New Collection"></input>
      </form>

      <h2>Users</h2>
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
