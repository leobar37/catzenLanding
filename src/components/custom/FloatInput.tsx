import {
  CSSProperties,
  forwardRef,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useState,
} from "react";
import { FormControl } from "react-bootstrap";

interface FLoatIputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
interface FLoatIputTextProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}
export const FloatInput = forwardRef<HTMLInputElement, FLoatIputProps>(
  (props: FLoatIputProps, ref) => {
    const isError = props.error !== "undefined";
    return (
      <div className="catzen_input">
        <input {...props} type="text" ref={ref} />
        <label>{props.label}</label>
        <span style={{ display: !isError ? "none" : "" }}>{props.error}</span>
      </div>
    );
  }
);

export const FloatInputText = forwardRef<
  HTMLTextAreaElement,
  FLoatIputTextProps
>((props: FLoatIputTextProps, ref) => {
  const stylesTextArea = {
    margin: "50px 15px",
    width: "100%",
  } as CSSProperties;
  return (
    <div className="catzen_input" style={stylesTextArea}>
      <textarea placeholder="Mensaje" {...props} ref={ref} />
      <label>{props.label}</label>
    </div>
  );
});
