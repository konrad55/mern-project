export interface User {
  id: string;
  name: string;
  image: string;
  places: number;
}

export interface Place {
  id: string;
  title: string;
  description: string;
  image: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
  creator: string;
}

export interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export interface FormInputProps {
  id: string;
  element: "input" | "textarea";
  type?: string;
  placeholder?: string;
  rows?: number;
  label: string;
  errorText?: string;
  validators: Array<{
    type: string;
    val?: number;
  }>;
  onInput: (id: string, value: string, isValid: boolean) => void;
  initialValue?: string;
  initialValid?: boolean;
}

export interface ButtonProps {
  inverse?: boolean;
  danger?: boolean;
  to?: string;
  type?: "button" | "submit" | "reset";
  size?: "small" | "big";
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export interface ModalProps {
  onCancel: () => void;
  header: string;
  show: boolean;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

export interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
  className?: string;
  children?: React.ReactNode;
}

export interface AvatarProps {
  image: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number;
}

export interface BackdropProps {
  onClick: () => void;
}
