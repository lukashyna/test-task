import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(60, "Name must be less than 60 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(
      /^\+380\d{9}$/,
      "Phone number must start with +380 and be 12 digits long"
    )
    .required("Phone number is required"),
  photo: Yup.mixed()
    .required("Photo is required")
    .test(
      "fileSize",
      "File size should be less than 5MB",
      (value) => value && value.size <= 5 * 1024 * 1024
    )
    .test("fileType", "Only jpg/jpeg images are allowed", (value) =>
      value ? ["image/jpeg", "image/jpg"].includes(value.type) : false
    )
    .test(
      "fileResolution",
      "Photo resolution must be at least 70x70px",
      (value) =>
        new Promise((resolve) => {
          if (!value) return resolve(false);

          const image = new Image();
          image.src = URL.createObjectURL(value);

          image.onload = () => resolve(image.width >= 70 && image.height >= 70);
          image.onerror = () => resolve(false);
        })
    ),
});
