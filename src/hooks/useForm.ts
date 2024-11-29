import { useState, ChangeEvent, FormEvent } from 'react';
import { validateEmail, validateRequired } from '../utils/validation';

interface ValidationRules {
  [key: string]: (value: string) => boolean;
}

interface FormErrors {
  [key: string]: string;
}

export const useForm = <T extends { [key: string]: string }>(
  initialState: T,
  validationRules?: ValidationRules
) => {
  const [formData, setFormData] = useState<T>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (validationRules && validationRules[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validationRules[name](value) ? '' : `Invalid ${name}`,
      }));
    }
  };

  const handleSubmit = (e: FormEvent, onSubmit: (data: T) => void) => {
    e.preventDefault();
    
    if (validationRules) {
      const newErrors: FormErrors = {};
      let hasErrors = false;

      Object.keys(validationRules).forEach(key => {
        if (!validationRules[key](formData[key])) {
          newErrors[key] = `Invalid ${key}`;
          hasErrors = true;
        }
      });

      setErrors(newErrors);
      if (hasErrors) return;
    }

    onSubmit(formData);
  };

  return { formData, errors, handleChange, handleSubmit };
};

export const defaultValidationRules = {
  email: validateEmail,
  name: validateRequired,
  message: validateRequired,
};