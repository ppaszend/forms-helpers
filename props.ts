import { cssUnitValidator, hexColorValidator } from "@/helpers/shared/propValidator";

const props = {
  name: () => ({
    type: String,
    required: true,
    validator: (label: string) => label.length > 0,
  }),
  label: () => ({
    type: String,
    required: true,
    validator: (label: string) => label.length > 0,
  }),
  cssUnit: (defaultValue: string) => ({
    type: String,
    default: defaultValue,
    validator: cssUnitValidator,
  }),
  hexColor: (defaultValue: string) => ({
    type: String,
    default: defaultValue,
    validator: hexColorValidator,
  }),
};

export default props;
