import { Icon, IconProps } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';

type ButtonIconProps = {
  icon: Icon;
  iconProps?: IconProps;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonIcon({
  icon: Icon,
  className,
  iconProps,
  ...rest
}: ButtonIconProps) {
  return (
    <button {...rest} className={`${className} p-2 rounded-md transition`}>
      <Icon {...iconProps} />
    </button>
  );
}
