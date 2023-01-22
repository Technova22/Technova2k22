export const Input = ({ id, type,fname, label, disabled,onChange2 }) => (
    <><input 
    className="form-group__input"
     type={type} 
     id={id}
     name={fname}
      placeholder={label} 
      onChange={onChange2} 
      disabled={disabled}
      
      />
      
      </>
);