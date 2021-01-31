import { OverlayTrigger, Tooltip } from "react-bootstrap";

type TPlacement =
  | "top"
  | "auto"
  | "left"
  | "right"
  | "bottom"
  | "auto-start"
  | "auto-end"
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end"
  | "right-start"
  | "right-end"
  | "left-start"
  | "left-end"
  | undefined;

const SocialLinks = (props: { fixed: boolean }) => {
  const links: {
    name: string;
    link: string;
    icon: string;
    id: string;
    placement?: TPlacement;
  }[] = [
    {
      name: "facebook",
      id: "",
      link: "https://www.facebook.com/catzen.es",
      icon: "fab fa-facebook-f",
      placement: "top",
    },
    {
      name: "Instagram",
      id: "",
      link: "https://www.instagram.com/catzen.es/",
      placement: "top",
      icon: "fab fa-instagram",
    },
    {
      name: "Youtube",
      id: "",
      link: "",
      placement: "top",
      icon: "fab fa-youtube",
    },
  ];
  return (
    <ul className={`socialIcons ${props.fixed ? "fixed" : ""}`}>
      {links.map((link, i) => (
        <a key={i} href={link.link}>
          <OverlayTrigger
            placement={link.placement?.length ? link.placement : "auto"}
            overlay={<Tooltip id={"tooltip" + i}> {link.name}</Tooltip>}
          >
            <i className={link.icon}></i>
          </OverlayTrigger>
        </a>
      ))}
    </ul>
  );
};

export default SocialLinks;
