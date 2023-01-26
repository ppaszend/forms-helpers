import type { Step } from "@/shared/models/Step";
import type { Section } from "@/shared/models/Section";
import type { Row } from "@/shared/models/Row";
import type { Field } from "@/shared/models/Field";
import type { Form } from "@/shared/models/Form";

export const getStepByPosition = (
  form: Form,
  stepId: number
): Step | undefined => {
  return form.steps.find((step) => step.id === stepId);
};

export const getSectionByPosition = (
  form: Form,
  stepId: number,
  sectionId: number
): Section | undefined => {
  return getStepByPosition(form, stepId)?.sections.find(
    (section) => section.id === sectionId
  );
};

export const getRowByPosition = (
  form: Form,
  stepId: number,
  sectionId: number,
  rowId: number
): Row | undefined => {
  return getSectionByPosition(form, stepId, sectionId)?.rows.find(
    (row) => row.id === rowId
  );
};

export const getFieldByPosition = (
  form: Form,
  stepId: number,
  sectionId: number,
  rowId: number,
  fieldId: number
): Field | undefined => {
  return getRowByPosition(form, stepId, sectionId, rowId)?.fields.find(
    (field) => field.id === fieldId
  );
};
