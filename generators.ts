import type { Form } from "@/shared/models/Form";
import type { FormData } from "@/shared/models/FormData";

export const generateEmptyFormData = (form: Form): FormData[] => {
  const formData: FormData[] = [];

  form.steps.forEach((step) => {
    step.sections.forEach((section) => {
      section.rows.forEach((row) => {
        row.fields.forEach((field) => {
          formData.push({
            name: field.props.name,
            value: "",
          });
        });
      });
    });
  });

  return formData;
};
