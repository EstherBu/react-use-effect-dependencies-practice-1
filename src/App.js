import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import SelectTypeForm from "./components/SelectTypeForm";
import "./styles.css";

export default function App() {
  const [dataType, setDataType] = useState("people");

  const [data, setData] = useState(null);

  // console.log({ data });

  async function getData() {
    const retrieve = await fetch(`https://swapi.dev/api/${dataType}//`)
    const starWars = await retrieve.json()
    console.log(starWars)
    setData(starWars)
  }
  
  useEffect(() => {
    getData()
  }, [dataType])

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}

