import { useState } from "react";
import { DefaultContext } from "./Context";

//импортируем стили
import "./App.css";

import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer";

export default function App() {
  const [fan, setFan] = useState("");

  const handleCreateFan = ({ name }) => {
    setFan(name);
  };

  const [switchChecked, setSwitchCheked] = useState(false);

  const handleSwitchChange = () => {
    setSwitchCheked((prevItem) => !prevItem);
  }

  return (
    <DefaultContext.Provider value={{ handleCreateFan, handleSwitchChange, switchChecked }}>
      <Header fan={fan} mode={switchChecked}/>
      <hr />
      <Content />
      <hr />
      <Footer />
    </DefaultContext.Provider>
  );
}
