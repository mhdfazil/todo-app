import TextField from '@mui/material/TextField';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const Input = ({ label, name, type, required }: InputOptions) => {
    const { register } = useFormContext();
    return (
        <div>
            <TextField 
                variant='outlined' 
                label={label} 
                type={type} 
                required={required}
                sx={{ ml: 4, width: '100%', mb: 3 }} 
                InputLabelProps={{ shrink: true }}
                {...register(name)} />
        </div>
    );
};

type InputOptions = {
    label: string;
    value?: string;
    name: any;
    type?: string;
    required?: boolean
}

export default Input;