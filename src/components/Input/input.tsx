import "./input.css";

interface InputProps {
      type: string
      placeholder: string
      maxlength?: number
}

export default function Input({type, placeholder, maxlength}: InputProps) {

      
  return (
      <input type={type} className=" p-3 bg-input w-100 border-0 rounded-3 fs-5" placeholder={placeholder} max-length={maxlength}  required />
  );
}
