import { Icon, IconProps } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';

type ButtonIconProps = {
  icon: Icon;
  iconClassName?: IconProps['className'];
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonIcon({
  icon: Icon,
  className,
  iconClassName,
  ...rest
}: ButtonIconProps) {
  return (
    <button {...rest} className={`${className} p-2 rounded-md transition`}>
      <Icon className={iconClassName} />
    </button>
  );
}
