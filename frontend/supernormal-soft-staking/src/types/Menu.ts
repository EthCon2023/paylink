import { ReactNode } from 'react'

export interface MenuItemProps {
  href: string;
  iconSrc: string;
  title: string;
  description: ReactNode;
}
