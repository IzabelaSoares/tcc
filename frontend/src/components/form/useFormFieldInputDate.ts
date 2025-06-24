interface props {
  onChange: (text: string) => void;
}

export default function useFormFieldInputDate({ onChange }: props) {
  const formatDate = (input: string) => {
    const cleaned = input.replace(/\D/g, "");
    let formatted = cleaned;
    if (cleaned.length >= 3 && cleaned.length <= 4) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    } else if (cleaned.length >= 5 && cleaned.length <= 8) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(
        2,
        4
      )}/${cleaned.slice(4)}`;
    }
    return formatted;
  };

  const handleChange = (text: string) => {
    const formatted = formatDate(text);
    onChange(formatted);
  };

  return {
    handleChange,
  };
}
