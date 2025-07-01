
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { promptService } from '@/services/promptService';
import { OptimizationResponse } from '@/types';
import { 
  Wand2, 
  Copy, 
  Save, 
  Loader2, 
  CheckCircle, 
  ArrowRight,
  Lightbulb,
  Target,
  Sparkles
} from 'lucide-react';

const Optimize = () => {
  const [originalPrompt, setOriginalPrompt] = useState('');
  const [category, setCategory] = useState('');
  const [target, setTarget] = useState('');
  const [optimization, setOptimization] = useState<OptimizationResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const categories = [
    { value: 'creative', label: '创意写作', description: '艺术创作、文案撰写、故事创作' },
    { value: 'technical', label: '技术开发', description: '编程、系统设计、技术咨询' },
    { value: 'business', label: '商业分析', description: '市场分析、商业策划、数据分析' },
    { value: 'educational', label: '教育培训', description: '教学内容、培训材料、知识解释' },
    { value: 'research', label: '学术研究', description: '学术写作、研究分析、文献综述' }
  ];

  const targets = [
    { value: 'chatgpt', label: 'ChatGPT' },
    { value: 'claude', label: 'Claude' },
    { value: 'gemini', label: 'Gemini' },
    { value: 'general', label: '通用AI模型' }
  ];

  const handleOptimize = async () => {
    if (!originalPrompt.trim()) {
      toast({
        title: '请输入提示词',
        description: '请先输入您想要优化的提示词内容',
        variant: 'destructive'
      });
      return;
    }

    if (!category) {
      toast({
        title: '请选择类别',
        description: '请选择您的提示词所属类别',
        variant: 'destructive'
      });
      return;
    }

    setIsLoading(true);
    try {
      const result = await promptService.optimizePrompt({
        prompt: originalPrompt,
        category,
        target: target || 'general'
      });
      setOptimization(result);
      toast({
        title: '优化完成！',
        description: '您的提示词已成功优化',
      });
    } catch (error) {
      toast({
        title: '优化失败',
        description: '请稍后重试',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: '复制成功',
        description: '内容已复制到剪贴板',
      });
    } catch (error) {
      toast({
        title: '复制失败',
        description: '请手动复制内容',
        variant: 'destructive'
      });
    }
  };

  const handleSave = () => {
    if (!optimization || !originalPrompt || !category) return;

    const tags = [category];
    if (target) tags.push(target);

    promptService.savePrompt({
      original: originalPrompt,
      optimized: optimization.optimized,
      category,
      tags
    });

    toast({
      title: '保存成功',
      description: '优化结果已保存到历史记录',
    });
  };

  return (
    <div className="container py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-full px-4 py-2 mb-4">
            <Wand2 className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">AI提示词优化器</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            让AI更好地理解您的需求
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            输入您的原始提示词，我们将为您提供专业的优化建议和改进方案
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  原始提示词
                </CardTitle>
                <CardDescription>
                  请输入您想要优化的提示词内容
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="例如：请帮我写一篇关于人工智能的文章..."
                  value={originalPrompt}
                  onChange={(e) => setOriginalPrompt(e.target.value)}
                  className="min-h-[150px] resize-none"
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">选择类别 *</label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="请选择类别" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat.value} value={cat.value}>
                            <div>
                              <div className="font-medium">{cat.label}</div>
                              <div className="text-xs text-muted-foreground">{cat.description}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">目标模型（可选）</label>
                    <Select value={target} onValueChange={setTarget}>
                      <SelectTrigger>
                        <SelectValue placeholder="选择AI模型" />
                      </SelectTrigger>
                      <SelectContent>
                        {targets.map((t) => (
                          <SelectItem key={t.value} value={t.value}>
                            {t.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  onClick={handleOptimize} 
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      正在优化中...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      开始优化
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Quick Examples */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">示例提示词</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { text: "帮我写一份产品介绍", category: "business" },
                    { text: "解释量子计算的基本原理", category: "educational" },
                    { text: "编写一个Python爬虫程序", category: "technical" }
                  ].map((example, index) => (
                    <div 
                      key={index}
                      className="p-3 bg-muted rounded-lg cursor-pointer hover:bg-muted/80 transition-colors"
                      onClick={() => {
                        setOriginalPrompt(example.text);
                        setCategory(example.category);
                      }}
                    >
                      <div className="text-sm">{example.text}</div>
                      <Badge variant="secondary" className="mt-1">
                        {categories.find(c => c.value === example.category)?.label}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {optimization ? (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      优化后的提示词
                    </CardTitle>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleCopy(optimization.optimized)}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        复制
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleSave}
                      >
                        <Save className="h-4 w-4 mr-2" />
                        保存
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="whitespace-pre-wrap text-sm leading-relaxed">
                        {optimization.optimized}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-yellow-500" />
                      改进说明
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {optimization.improvements.map((improvement, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <ArrowRight className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{improvement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">进一步优化建议</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {optimization.suggestions.map((suggestion, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{suggestion}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="h-[400px] flex items-center justify-center">
                <CardContent className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wand2 className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">等待优化</h3>
                  <p className="text-muted-foreground">
                    输入您的提示词并点击"开始优化"查看结果
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Optimize;
