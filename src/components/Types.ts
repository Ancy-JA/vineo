// types.ts

export interface User {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  country?: string;
  postalCode?: string;
  city?: string;
}

export interface Wine {
  name: string;
}

export interface Box {
  _id: string;
  user: User;
  box_wines: Wine[];
  created_at: string;
  delivery_date: string;
  status: string;
}

// Add the interface for the PDF download response
export interface GetBoxWinePrintCardResponse {
  data: {
    getBoxWinePrintCard: string; // Assuming this is a Base64-encoded string for the PDF
  };
}
export interface User {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  country?: string;
  postalCode?: string;
  city?: string;
}

export interface Wine {
  name: string;
}

export interface Box {
  _id: string;
  user: User;
  box_wines: Wine[];
  created_at: string;
  delivery_date: string;
  status: string;
}
export interface BoxItemProps {
  box: Box;
  handleDownload: (boxId: string) => void;
  handleView: (box: Box) => void;
}
export interface SearchBarProps {
  onSearchChange: (debouncedTerm: string) => void;
  placeholder: string;
}

export interface TextFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: string | boolean;
}
export interface PasswordFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  error?: string | boolean;
}
export interface Token {
  accessToken: string;
  refreshToken: string;
}
export interface Wine {
  wine_name: string;
  image: string;
  rating: number;
  area: string;
  store: string;
}

export interface Box {
  date: string;
  wines: Wine[];
}
export interface Subscription {
  _id: string;
  title: string;
  sub_title: string;
  amount: number;
  description: string [];
  type: number;
  is_current: boolean;
}
export interface SubscriptionListProps {
  subscriptions: Subscription[];
}
