export const initialValues = {
  name: "",
  email: "",
  phone: "",
  position_id: 1,
  photo: null,
};

export const formFields = [
  { name: "name", type: "text", label: "Your name" },
  { name: "email", type: "email", label: "Email" },
  {
    name: "phone",
    type: "tel",
    label: "Phone",
    extra: "+38 (XXX) XXX - XX - XX",
  },
];
