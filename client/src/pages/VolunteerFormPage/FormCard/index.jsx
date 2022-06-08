import React, { useState } from "react";

// components
import Form from "../../../components/design/Form";
import Button from "../../../components/design/Button";

// constants
import { colors } from "../../../constants/colors.constants";

// css
import styles from "../VolunteerFormPage.module.css";

const FormCard = ({
  activeStep,
  len,
  continueStepper,
  backStepper,
  submitResp = () => {},
}) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [college, setCollege] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [nationality, setNationality] = useState("");
  const [academicQualification, setAcademicQualification] = useState("");
  const [language, setLanguage] = useState([]);
  const [toybankLocation, setToybankLocation] = useState([]);
  const [oragnization, setOragnization] = useState("");
  const [platform, setPlatform] = useState([]);
  const [availability, setAvailability] = useState("");
  const [skills, setSkills] = useState([]);
  const [preferences, setPreferences] = useState([]);
  const [occupation, setOccupation] = useState("");

  const form_component1 = [
    {
      input: "input",
      label: "Name",
      required: true,
      value: name,
      setVar: setName,
    },
    {
      input: "textarea",
      label: "Address",
      required: true,
      value: address,
      setVar: setAddress,
    },
    {
      input: "select",
      label: "College",
      multiple: false,
      options: [
        {
          label: "PES University",
          value: "PESU",
        },
        {
          label: "RV College of Engineering",
          value: "RVCE",
        },
        {
          label: "IIT Bombay",
          value: "IITB",
        },
      ],
      value: college,
      setVar: setCollege,
    },
    {
      input: "email",
      label: "Email",
      required: true,
      value: email,
      setVar: setEmail,
    },
    {
      input: "phone",
      label: "Phone",
      required: true,
      value: phone,
      setVar: setPhone,
    },
  ];

  const form_component2 = [
    {
      input: "input",
      label: "Nationality",
      required: true,
      value: nationality,
      setVar: setNationality,
    },
    {
      input: "input",
      label: "Academic Qualification",
      required: true,
      value: academicQualification,
      setVar: setAcademicQualification,
    },
    {
      input: "input",
      label: "Occupation",
      required: true,
      value: occupation,
      setVar: setOccupation,
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
    {
      input: "select",
      label: "Organisation",
      multiple: false,
      required: true,
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
  ];

  const form_component3 = [
    {
      input: "select",
      label: "How did you hear about Toybank?",
      required: true,
      multiple: true,
      options: [
        "Social Media",
        "Friends",
        "Exhibitions",
        "Through a sentsitization session",
        "Through Media",
        "Through the Volunteer Calendar",
      ],
      value: platform,
      setVar: setPlatform,
    },
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
      value: toybankLocation,
      setVar: setToybankLocation,
    },
    {
      input: "select",
      label: "When would you prefer to Volunteer?",
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
      input: "select",
      label: "Please list the relevant skills you have",
      required: false,
      multiple: true,
      options: ["Story Telling", "Photography", "Writing and Editing"],
      value: skills,
      setVar: setSkills,
    },
    {
      input: "select",
      label: "Please indicate your Volunteering Preferences",
      required: false,
      multiple: true,
      options: [
        "Play Session with Children",
        "Toy collection and Distribution",
        "Inventory and Gameplay",
        "Research and Impact Assessments",
        "Events and Fundraising",
        "Content and Design",
        "Toybank Ambassador",
      ],
      value: preferences,
      setVar: setPreferences,
    },
  ];

  return (
    <form className={styles.formContainer}>
      {activeStep === 0 && <Form form_construct={form_component1} />}
      {activeStep === 1 && <Form form_construct={form_component2} />}
      {activeStep === 2 && <Form form_construct={form_component3} />}
      <div className={styles.btnGrp}>
        <Button
          value={activeStep === len - 1 ? "Submit" : "Continue"}
          onClick={activeStep === len - 1 ? submitResp : continueStepper}
          customStyles={{
            backgroundColor: colors.PRIMARY_ORANGE,
            borderRadius: "10px",
            border: "0",
            fontSize: "0.8rem",
            paddingY: "0.7rem",
            paddingX: "0.2rem",
          }}
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