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

export { ButtonPrimary, ButtonOutline };