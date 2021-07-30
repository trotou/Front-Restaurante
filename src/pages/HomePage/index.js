import { Card, Typography } from "@material-ui/core";
import { useEffect } from "react";
import TemporaryDrawer from "../../components/SideBar";
import UsersList from "../../components/UsersList";
import { useServices } from "../../Providers/Services";
import { DivHome } from "./styles";

const HomePage = () => {
  const { userList } = useServices();

  useEffect(() => {}, [userList]);

  return (
    <DivHome>
      <Card
        style={{
          backgroundColor: "#01001a",
          color: "white",
          textAlign: "left",
          padding: "2%",
        }}
      >
        <Typography variant="subtitle1">
          O verdadeiro poder está em sua equipe
        </Typography>

        <Typography variant="h6" style={{ fontWeight: 600 }}>
          Gerencie seus funcionários, especialmente os atendentes
        </Typography>
      </Card>

      <TemporaryDrawer />

      <UsersList />
    </DivHome>
  );
};

export default HomePage;
