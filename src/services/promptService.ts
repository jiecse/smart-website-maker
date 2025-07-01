
import { Prompt, OptimizationRequest, OptimizationResponse } from '@/types';

class PromptService {
  private prompts: Prompt[] = [];

  // 模拟AI优化提示词的服务
  async optimizePrompt(request: OptimizationRequest): Promise<OptimizationResponse> {
    // 模拟API调用延迟
    await new Promise(resolve => setTimeout(resolve, 2000));

    const improvements = this.generateImprovements(request.prompt, request.category);
    const optimized = this.generateOptimizedPrompt(request.prompt, request.category);
    const suggestions = this.generateSuggestions(request.category);

    return {
      optimized,
      improvements,
      suggestions
    };
  }

  private generateOptimizedPrompt(original: string, category: string): string {
    const prefixes = {
      'creative': '创作一个富有想象力和创意的',
      'technical': '请详细解释并提供具体的技术实现方案：',
      'business': '从商业角度分析并提供可行的解决方案：',
      'educational': '用清晰易懂的方式教授和解释：',
      'research': '进行深入的研究分析并提供数据支持：'
    };

    const suffix = category === 'creative' ? '，要求内容生动有趣，具有强烈的视觉冲击力。' : 
                   category === 'technical' ? '，需要包含代码示例和最佳实践。' :
                   category === 'business' ? '，请提供ROI分析和实施步骤。' :
                   category === 'educational' ? '，使用比喻和实例帮助理解。' :
                   '，请引用可靠来源和数据。';

    return `${prefixes[category as keyof typeof prefixes] || '请优化以下内容：'}${original}${suffix}`;
  }

  private generateImprovements(original: string, category: string): string[] {
    const baseImprovements = [
      '增加了上下文信息，使AI更好理解需求',
      '明确了输出格式和结构要求',
      '添加了具体的质量标准和期望'
    ];

    const categorySpecific = {
      'creative': ['增强了创意表达的引导', '添加了情感色彩的描述'],
      'technical': ['明确了技术难度等级', '添加了代码示例要求'],
      'business': ['增加了商业价值评估', '明确了目标受众'],
      'educational': ['优化了教学逻辑结构', '增加了互动性元素'],
      'research': ['强化了数据要求', '明确了研究方法论']
    };

    return [...baseImprovements, ...(categorySpecific[category as keyof typeof categorySpecific] || [])];
  }

  private generateSuggestions(category: string): string[] {
    const suggestions = {
      'creative': [
        '尝试添加具体的风格描述（如"扁平化设计风格"）',
        '指定色彩搭配或视觉风格',
        '添加目标受众信息'
      ],
      'technical': [
        '指定编程语言或技术栈',
        '明确性能或安全要求',
        '添加错误处理需求'
      ],
      'business': [
        '明确预算范围和时间限制',
        '指定行业背景和竞争环境',
        '添加成功指标定义'
      ],
      'educational': [
        '指定学习者的知识水平',
        '添加实践练习要求',
        '明确学习目标和成果'
      ],
      'research': [
        '指定研究时间范围',
        '明确数据来源要求',
        '添加研究方法限制'
      ]
    };

    return suggestions[category as keyof typeof suggestions] || [
      '尝试使用更具体的描述词',
      '添加输出格式要求',
      '明确质量标准'
    ];
  }

  savePrompt(prompt: Omit<Prompt, 'id' | 'createdAt'>): Prompt {
    const newPrompt: Prompt = {
      ...prompt,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    
    this.prompts.unshift(newPrompt);
    localStorage.setItem('prompts', JSON.stringify(this.prompts));
    return newPrompt;
  }

  getPrompts(): Prompt[] {
    if (this.prompts.length === 0) {
      const saved = localStorage.getItem('prompts');
      if (saved) {
        this.prompts = JSON.parse(saved).map((p: any) => ({
          ...p,
          createdAt: new Date(p.createdAt)
        }));
      }
    }
    return this.prompts;
  }

  deletePrompt(id: string): void {
    this.prompts = this.prompts.filter(p => p.id !== id);
    localStorage.setItem('prompts', JSON.stringify(this.prompts));
  }

  updatePromptRating(id: string, rating: number): void {
    const prompt = this.prompts.find(p => p.id === id);
    if (prompt) {
      prompt.rating = rating;
      localStorage.setItem('prompts', JSON.stringify(this.prompts));
    }
  }
}

export const promptService = new PromptService();
