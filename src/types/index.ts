
export interface Prompt {
  id: string;
  original: string;
  optimized: string;
  category: string;
  tags: string[];
  createdAt: Date;
  rating?: number;
}

export interface OptimizationRequest {
  prompt: string;
  category: string;
  target: string;
}

export interface OptimizationResponse {
  optimized: string;
  improvements: string[];
  suggestions: string[];
}
