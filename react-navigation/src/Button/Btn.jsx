import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import styled from "styled-components";
import axios from "axios";

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1;
`;

const FileInput = styled.input`
  display: none;
`;

const UploadButton = styled.label`
  background-color: #4b37cf;
  color: white;
  font-size: 24px;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Icon = styled(AiFillPlusCircle)`
  font-size: 30px;
  margin-right: 5px;
`;

const Btn = ({ setUpdateUI, fileType }) => {
  const handleChange = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append(fileType, e.target.files[0]);

    axios
      .post(`http://localhost:3001/api/save${fileType}`, formData) // Include fileType in the URL
      .then((res) => {
        console.log(res.data);
        setUpdateUI(res.data._id);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ButtonContainer>
      <UploadButton htmlFor={`file_picker${fileType}`}>
        <Icon />
        Upload {fileType === "photo" ? "Photo" : "Video"}
      </UploadButton>
      <FileInput
        onChange={(e) => handleChange(e)}
        hidden
        type="file"
        name={`file_picker${fileType}`}
        id={`file_picker${fileType}`}
      />
    </ButtonContainer>
  );
};

export default Btn;
