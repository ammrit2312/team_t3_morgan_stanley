import React, {useState} from "react";

import { useParams } from "react-router-dom";
import Form from "../../components/design/Form";

const TestPage = () => {

    const [college, setCollege] = useState("");
    const [language, setLanguage] = useState([]);

    const onClickButton = () => {
        console.log("college", college);
        console.log("language", language);
    }
  const form_check = [
    {
      input: "select",
      label: "College",
      multiple: false,
      options: [
        {
          label: "PES University",
          value: "PES University",
        },
        {
          label: "RV College of Engineering",
          value: "RV College of Engineering",
        },
        {
          label: "IIT Bombay",
          value: "IIT Bombay",
        },
      ],
      value: college,
      setVar: setCollege,
    },
    {
      input: "select",
      multiple: true,
      label: "Language",
      required: true,
      options: ["Hindi", "English", "Marathi", "Urdu"],
      value: language,
      setVar: setLanguage,
    },
  ];
  let { id } = useParams();
  return (
    <div>
      <h1>This is the test page</h1>
      
      <Form form_construct={form_check} />
      <button onClick={onClickButton}>Submit</button>
    </div>
  );
};

export default TestPage;
