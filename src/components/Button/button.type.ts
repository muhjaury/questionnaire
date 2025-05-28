import React from "react";

export interface Button_Type extends React.HTMLAttributes<HTMLButtonElement> {
  children?: string;
  width?: string | undefined;
  height?: string | undefined;
}
