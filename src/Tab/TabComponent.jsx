import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import LoginForm from "../Form/LoginForm";
import RegisterForm from "../Form/RegisterForm";

const  TabComponent = () =>  {
  const [state, setState] = React.useState(0)
  const handleSelect = index => {
    setState(index);
  }

    return (
      <Tabs
        selectedIndex={state}
        onSelect={(e)=> handleSelect(e)}
      >
        <TabList>
          <Tab key={0}>J'ai un Compte</Tab>
          <Tab key={1} >Je n'ai pas de Compte</Tab>
        </TabList>
        <TabPanel>
            <LoginForm/>
        </TabPanel>
        <TabPanel>
            <RegisterForm />
        </TabPanel>
      </Tabs>
    );
  }

export default TabComponent;