import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// utils
import showNotification from "../../../utils/notifications.utils"

// components
import Form from "../../../components/design/Form";
import Button from "../../../components/design/Button";

// constants
import { colors } from "../../../constants/colors.constants";

// css
import styles from "../UploadActivityFormPage.module.css";

// api
import { submitActivity } from "../../../api/forms.api";

const FormCard = ({
  activeStep,
  len,
  continueStepper,
  backStepper,
  submitResp = () => {},
}) => {
  const [title, setTitle] = useState("");
  const [maxVol, setMaxVol] = useState(0);
  const [description, setDescription] = useState("");
  const [catergory, setCatergory] = useState("");
  const [location, setLocation] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [mode, setMode] = useState("");
  const [language, setLanguage] = useState([]);
  const [skill, setSkill] = useState([]);
  const [occupation, setOccupation] = useState("");
  const [oragnization, setOragnization] = useState("");
  const [availability, setAvailability] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const form_component1 = [
    {
      input: "input",
      label: "Title",
      required: true,
      value: title,
      setVar: setTitle,
    },
    {
      input: "textarea",
      label: "Description",
      required: true,
      value: description,
      setVar: setDescription,
    },
    {
      input: "select",
      label: "Category",
      multiple: false,
      options: [
        {
          label: "Play sessions with Children",
          value: "Play sessions with Children",
        },
        {
          label: "Toy collection and Distribution",
          value: "Toy collection and Distribution",
        },
        { label: "Inventory and Gameplay", value: "Inventory and Gameplay" },
        {
          label: "Research and Impact Assessments",
          value: "Research and Impact Assessments",
        },
        { label: "Events and Fundraising", value: "Events and Fundraising" },
        { label: "Content and Design", value: "Content and Design" },
        { label: "Toybank Ambassador", value: "Toybank Ambassador" },
      ],
      value: catergory,
      setVar: setCatergory,
    },
    {
      input: "input",
      label: "Date (DD/MM/YYYY)",
      required: true,
      value: date,
      setVar: setDate,
    },
    {
      input: "input",
      label: "Time (12hr clock for example 1:05PM)",
      required: true,
      value: time,
      setVar: setTime,
    },
    {
      input: "input",
      label: "Duration (in minutes)",
      required: true,
      value: duration,
      setVar: setDuration,
    },
  ];

  const form_component2 = [
    {
      input: "select",
      label: "In which Toybank Location would you like to volunteer?",
      required: false,
      multiple: true,
      options: [
        "Outside Mumbai",
        "Navi Mumbai",
        "Central Zone",
        "Western Zone",
        "Harbour Zone",
        "In-Office (Mahim)",
      ],
      value: location,
      setVar: setLocation,
    },
    {
      input: "select",
      label: "Mode of Activity",
      multiple: false,
      options: [
        {
          label: "Online",
          value: "Online",
        },
        {
          label: "Offline",
          value: "Offline",
        },
      ],
      value: mode,
      setVar: setMode,
    },
    {
      input: "textarea",
      label: "Address (put NA if online)",
      required: true,
      value: address,
      setVar: setAddress,
    },
    {
      input: "select",
      label: "When would the Activity be conducted?",
      multiple: false,
      required: true,
      options: [
        {
          label: "Weekdays",
          value: "weekdays",
        },
        {
          label: "Weekends",
          value: "weekend",
        },
        {
          label: "Both",
          value: "both",
        },
      ],
      value: availability,
      setVar: setAvailability,
    },
    {
      input: "input",
      label: "Maximum number of Volunteers",
      required: true,
      value: maxVol,
      setVar: setMaxVol,
      type: "number",
    },
  ];

  const form_component3 = [
    {
      input: "input",
      label: "Volunteer's occupation",
      required: false,
      value: occupation,
      setVar: setOccupation,
    },
    {
      input: "select",
      multiple: true,
      label: "What all languages a volunteer should know?",
      required: true,
      options: ["Hindi", "English", "Marathi", "Urdu"],
      value: language,
      setVar: setLanguage,
    },
    {
      input: "select",
      label: "Organisation",
      multiple: false,
      required: false,
      options: [
        {
          label: "Morgan Stanley India",
          value: "MSIND",
        },
        {
          label: "Deloitte India",
          value: "DeloitteIND",
        },
      ],
      value: oragnization,
      setVar: setOragnization,
    },
    {
      input: "select",
      label: "Please list the relevant skills volunteers must have",
      required: true,
      multiple: true,
      options: ["Story Telling", "Photography", "Writing and Editing"],
      value: skill,
      setVar: setSkill,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      title !== "" &&
      catergory !== "" &&
      date !== "" &&
      time !== "" &&
      duration !== "" &&
      location !== [] &&
      mode !== "" &&
      language !== [] &&
      availability !== "" &&
      skill !== [] &&
      maxVol !== 0 &&
      address !== "" &&
      description !== ""
    ) {
      const data = {
        ActivityName: title,
        ActivityType: catergory,
        ActivityDate: date,
        ActivityTime: time,
        ActivityDurationInMinutes: duration,
        Activity_Location: location,
        Activity_Mode: mode,
        Language_Preference: language,
        Activity_availability: availability,
        Preferred_skills: skill,
        Max_volunteers: maxVol,
        Activity_Address: address,
        Activity_Description: description,
      };
      submitActivity(data).then((res) => {
        if (res.status === 200) {
          showNotification({
            type: "success",
            message: "Activity added successfully",
          });
          navigate("/");
        } else {
          showNotification({
            type: "danger",
            message: "Error adding activity",
          });
          navigate("/");
        }
      });
    } else {
      showNotification({
        type: "danger",
        message: "Please fill all the fields",
      });
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      {activeStep === 0 && <Form form_construct={form_component1} />}
      {activeStep === 1 && <Form form_construct={form_component2} />}
      {activeStep === 2 && <Form form_construct={form_component3} />}
      <div className={styles.btnGrp}>
        <Button
          value={activeStep === len - 1 ? "Submit" : "Continue"}
          onClick={activeStep !== len - 1 ? continueStepper : submitResp}
          customStyles={{
            backgroundColor: colors.PRIMARY_ORANGE,
            borderRadius: "10px",
            border: "0",
            fontSize: "0.8rem",
            paddingY: "0.7rem",
            paddingX: "0.2rem",
          }}
          type={activeStep === len - 1 ? "submit" : ""}
        />
        {activeStep === 0 ? null : (
          <Button
            value="Back"
            btnType="secondary"
            onClick={backStepper}
            disabled={activeStep === 0 ? true : false}
            customStyles={{
              color: colors.PRIMARY_BLACK,
              borderRadius: "10px",
              fontSize: "0.8rem",
              paddingY: "0.7rem",
              paddingX: "0.2rem",
            }}
          />
        )}
      </div>
    </form>
  );
};

export default FormCard;
