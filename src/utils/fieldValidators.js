import React from 'react';


const minLength = min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined;

const minLength2 = minLength(2);
const required = value => (value ? undefined : 'Well this field is required');
const numeric = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const movieYear = value => value && value < 1895 ? 'Well the first ever movie created in 1895...' : undefined;
const alphabetic = value => value && /[^a-zA-Z ,]/i.test(value) ? 'Only alphabetic characters and commas allowed' : undefined;
const longMovie = value => value && /\D/g.test(value) > 360 ? 'Wow! longer then 6 hours??' : undefined;
const alphaNumeric = value => value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphabetic and numeric characters allowed' : undefined;


const renderField = ({ input, label, type, meta: { touched, error, warning }}) => (
    <div>
        <div>
            <input {...input} placeholder={label} type={type} className="form-control" formNoValidate autoFocus={true}/>
            {touched && ((error && <small className="error">{error}</small>) || (warning && <small className="warn">{warning}</small>))}
        </div> 
    </div>
);

const Validators = {
    minLength2,
    required,
    numeric,
    movieYear,
    alphabetic,
    longMovie,
    renderField,
    alphaNumeric,
}

export default Validators;
