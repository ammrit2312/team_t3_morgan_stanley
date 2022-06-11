//   dob: {
//     key: "dob",
//     title: "Date of Birth",
//     type: "date",
//   },

export const tableHeaders = {
  name: {
    key: "name",
    title: "Name",
    type: "text",
  },

  email: {
    key: "email",
    title: "Email",
    type: "text",
  },

  languages: {
    key: "languages",
    title: "Known Languages",
    type: "text",
    options: [
      {
        label: "Hindi",
        value: "Hindi",
      },
      {
        label: "English",
        value: "English",
      },
      {
        label: "Urdu",
        value: "Urdu",
      },
      {
        label: "Marathi",
        value: "Marathi",
      },
    ],
  },

  availability: {
    key: "availability",
    title: "Availability",
    type: "text",
    options: [
      {
        label: "Weekdays",
        value: "Weekdays",
      },
      {
        label: "Weekends",
        value: "Weekends",
      },
      {
        label: "Both",
        value: "Both",
      },
    ],
  },

  mode: {
    key: "mode",
    title: "Mode of Volunteering",
    type: "text",
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
  },
};
