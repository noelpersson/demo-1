import * as React from 'react';

interface IButtonProps {
    setter:React.Dispatch<React.SetStateAction<string>>,
    label:string,
    placeholder:string,
    type:React.HTMLInputTypeAttribute,
}

const Button: React.FunctionComponent<IButtonProps> = ({setter, label, placeholder, type="text"}) => {
  return (
    <div className='relative flex flex-col items-start justify-start gap-y-2 w-full'>
        <label htmlFor={label} className='font-medium text-sm bg-white'>{label}</label>
        <input required onChange={(e)=>setter(e.currentTarget.value)} id={label} type={type} placeholder={placeholder} className='button'/>
    </div>
  );
};

export default Button;
