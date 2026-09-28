export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  avatar: string;
  role?: string;
  comment: string;
  likes: number;
  timeAgo: string;
  verified: boolean;
  platform?: 'Android' | 'Windows' | 'iOS' | 'General';
}

export type ModalType = 
  | null 
  | 'checkout' 
  | 'offlinePdf' 
  | 'terms' 
  | 'privacy' 
  | 'refund' 
  | 'legal'
  | 'successDownload';
