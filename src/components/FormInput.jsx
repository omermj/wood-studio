import PropTypes from "prop-types";

/**
 * `FormInput` is a functional component that renders an input field within a form.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.label - The text to be displayed as the label of the input field.
 * @param {string} props.name - The name attribute for the input field.
 * @param {string} props.type - The type attribute for the input field (e.g., 'text', 'email', 'password').
 * @param {string} props.defaultValue - The default value for the input field.
 * @param {string} props.size - The size of the input.
 *
 * @returns {JSX.Element} A form control element with a label and an input field.
 */

const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  size: PropTypes.string.isRequired,
};

export default FormInput;
