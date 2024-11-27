import "./MyLabel.css";

interface Props {
  /**
   * Text to show in the component
   */

  label: string;

  /**
   *  Size of the text nemesis
   */

  size?: "normal" | "h1" | "h2" | "h3";
  /**
   *  Capitalized all the text
   */

  allCaps?: boolean;
  /**
   *  Label color
   */

  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   *  Font color
   */

  fontColor?: string;
}

export const MyLabel = ({
  label,
  size = "normal",
  allCaps,
  color,
  fontColor,
}: Props) => {
  return (
    <span
      className={`${size} ${color} label`}
      style={
        allCaps
          ? { textTransform: "uppercase", color: fontColor }
          : { color: fontColor }
      }
    >
      {label}
    </span>
  );
};
