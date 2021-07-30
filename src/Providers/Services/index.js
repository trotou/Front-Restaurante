import { createContext, useContext, useState } from "react";

import API from "../../services";

const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const [userList, setUserList] = useState();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const registerForm = async (data) => {
    try {
      await API.post("/funcionarios", data);
      getUsers();

      return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  };

  const getUsers = async () => {
    try {
      const response = await API.get("/funcionarios?page=1");
      setUserList(response.data);

      return true;
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async (id) => {
    try {
      const response = await API.get(`/funcionarios/${id}`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await API.patch(`/funcionarios/${id}`, { usuario: null });
      await API.delete(`/funcionarios/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const patchUser = async (id, data) => {
    try {
      await API.patch(`/funcionarios/${id}`, data);
      getUsers();

      return true;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ServicesContext.Provider
      value={{
        registerForm,
        getUserById,
        getUsers,
        deleteUser,
        patchUser,
        handleClose,
        handleOpen,
        open,
        userList,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => useContext(ServicesContext);
