import React, { ChangeEvent } from "react";

interface Props {
  title: string;
  isEditable: boolean;
  handleTitleChange(): void;
  handleTitle(event: ChangeEvent<HTMLInputElement>): void;
}

const Title = ({
  title,
  isEditable,
  handleTitleChange,
  handleTitle,
}: Props) => {
  if (isEditable) {
    return (
      <input
        autoFocus
        className="appearance-none outline-none border-none"
        type="text"
        onChange={handleTitle}
        onBlur={handleTitleChange}
        placeholder={title}
        value={title}
      />
    );
  } else {
    return (
      <h1
        onClick={handleTitleChange}
        className="hover:animate-pulse hover:cursor-pointer text-rich-black "
      >
        {title}
      </h1>
    );
  }
};

export default Title;
