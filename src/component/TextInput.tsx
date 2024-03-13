import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";

interface Props {
  placeHolder: string;
}

export const TextInput: React.FC<Props> = ({ placeHolder }) => {
  const [inputValue, setInputValue] = useState('');
  const [isEditable, setIsEditable] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleIconClick = () => {
    setIsEditable(!isEditable);
  };
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleIconClick();
    }
  };

  return (
    <>
      {
        isEditable ? (
          <TextField
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder={placeHolder}
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleIconClick}>
                  <AddIcon />
                </IconButton>
              ),
            }}
          />
        ) : (
          <div>
            <span>{inputValue}</span>
            <IconButton onClick={handleIconClick}>
              <DeleteIcon />
            </IconButton>
          </div>
        )}

    </>

  )
};