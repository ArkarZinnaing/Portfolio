import Link from "next/link";
import React from "react";

const ButtonPrimary: React.FC<{
  href?: string;
  target?: string;
  label: string;
  icon?: string;
  classes?: string;
}> = ({ href, target = "_self", label, icon, classes = "" }) => {
  if (href) {
    return (
      <Link
        href={href}
        target={target}
        className={`btn btn-primary ${classes}`}
      >
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </Link>
    );
  }
  return (
    <button className={`btn btn-primary ${classes}`}>
      {label}
      {icon && (
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
};

type ButtonEmailProps = {
  href?: string;
  target?: string;
  onClick?: () => void;
  label: string;
  icon?: string;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

const ButtonEmail: React.FC<ButtonEmailProps> = ({
  href,
  target = "_self",
  onClick,
  label,
  icon,
  className = "",
  ...props
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`btn btn-primary ${className}`}
        onClick={onClick}
        {...props} // Spread additional attributes like data-tooltips
      >
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  }

  return (
    <button
      className={`btn btn-primary ${className}`}
      onClick={onClick}
      {...props}
    >
      {label}
      {icon && (
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
};

const ButtonOutline: React.FC<{
  href?: string;
  target?: string;
  label: string;
  icon?: string;
  classes?: string;
}> = ({ href, target = "_self", label, icon, classes = "" }) => {
  if (href) {
    return (
      <Link
        href={href}
        target={target}
        className={`btn btn-outline ${classes}`}
      >
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </Link>
    );
  }
  return (
    <button className={`btn btn-outline ${classes}`}>
      {label}
      {icon && (
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
};

export { ButtonPrimary, ButtonOutline, ButtonEmail };