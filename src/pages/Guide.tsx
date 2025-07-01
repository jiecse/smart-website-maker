
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Lightbulb, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Star,
  AlertCircle,
  Users,
  TrendingUp,
  Zap,
  Brain,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Guide = () => {
  const quickTips = [
    {
      icon: Target,
      title: '明确目标',
      description: '清楚地描述您希望AI完成的具体任务',
      example: '不要说"写文章"，而要说"写一篇800字的产品介绍文章"'
    },
    {
      icon: Brain,
      title: '提供上下文',
      description: '给AI提供必要的背景信息和约束条件',
      example: '包含目标受众、文章风格、重点内容等信息'
    },
    {
      icon: MessageSquare,
      title: '指定格式',
      description: '明确说明您期望的输出格式和结构',
      example: '要求分点列出、使用标题、包含示例等'
    },
    {
      icon: CheckCircle,
      title: '设定标准',
      description: '描述成功完成任务的质量标准',
      example: '要求专业术语准确、逻辑清晰、案例丰富'
    }
  ];

  const categories = [
    {
      name: '创意写作',
      color: 'bg-pink-500',
      tips: [
        '指定文体风格（小说、诗歌、剧本等）',
        '描述情感基调和氛围',
        '设定字数和结构要求',
        '明确目标读者群体'
      ],
      example: {
        bad: '帮我写一个故事',
        good: '请创作一个1500字的科幻短篇小说，风格幽默轻松，以时间旅行为主题，面向青少年读者，包含意外的结局转折。'
      }
    },
    {
      name: '技术开发',
      color: 'bg-blue-500',
      tips: [
        '指定编程语言和版本',
        '说明技术要求和限制',
        '要求包含注释和解释',
        '明确性能和安全标准'
      ],
      example: {
        bad: '帮我写代码',
        good: '请用Python 3.9编写一个网页爬虫，抓取指定网站的产品信息，包含错误处理、速度控制、数据清洗功能，并提供详细注释。'
      }
    },
    {
      name: '商业分析',
      color: 'bg-green-500',
      tips: [
        '明确分析的商业目标',
        '提供行业和市场背景',
        '要求数据支持和论证',
        '指定报告格式和结构'
      ],
      example: {
        bad: '分析这个产品',
        good: '请对共享单车行业进行SWOT分析，重点关注2024年市场趋势，包含用户行为数据、竞争对手比较，提供投资建议和风险评估。'
      }
    }
  ];

  const commonMistakes = [
    {
      mistake: '提示词过于简短',
      solution: '提供充分的细节和上下文',
      icon: AlertCircle
    },
    {
      mistake: '目标不够明确',
      solution: '使用具体的动词和量化指标',
      icon: Target
    },
    {
      mistake: '忽略输出格式',
      solution: '明确指定期望的输出结构',
      icon: CheckCircle
    },
    {
      mistake: '缺少质量标准',
      solution: '设定清晰的成功标准',
      icon: Star
    }
  ];

  const bestPractices = [
    {
      title: '使用结构化模板',
      description: '采用角色-任务-要求-格式的结构',
      example: '作为[专业角色]，请[具体任务]，要求[质量标准]，输出格式为[具体格式]'
    },
    {
      title: '逐步优化提示词',
      description: '通过多轮对话不断完善提示词',
      example: '先测试基础版本，根据结果调整细节要求'
    },
    {
      title: '提供正面和负面示例',
      description: '明确说明期望和不期望的结果',
      example: '要求包含X，但避免Y，类似于A而不是B'
    },
    {
      title: '使用分步骤指令',
      description: '将复杂任务分解为多个步骤',
      example: '第一步分析，第二步总结，第三步建议'
    }
  ];

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-full px-4 py-2 mb-4">
            <BookOpen className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">使用指南</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            掌握AI提示词的艺术
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            学习如何编写高效的AI提示词，让每一次对话都产生最佳效果
          </p>
        </div>

        <Tabs defaultValue="basics" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basics">基础知识</TabsTrigger>
            <TabsTrigger value="categories">分类指南</TabsTrigger>
            <TabsTrigger value="advanced">进阶技巧</TabsTrigger>
            <TabsTrigger value="examples">实用示例</TabsTrigger>
          </TabsList>

          <TabsContent value="basics" className="space-y-6">
            {/* Quick Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  快速入门要点
                </CardTitle>
                <CardDescription>
                  掌握这四个核心原则，立即提升您的提示词效果
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {quickTips.map((tip, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-lg">
                          <tip.icon className="h-5 w-5 text-purple-600" />
                        </div>
                        <h3 className="font-semibold">{tip.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="text-xs font-medium text-green-700 dark:text-green-400">
                          示例：{tip.example}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Common Mistakes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  常见错误与解决方案
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {commonMistakes.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg">
                        <item.icon className="h-4 w-4 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-red-700 dark:text-red-400 mb-1">
                          ❌ {item.mistake}
                        </h4>
                        <p className="text-sm text-green-700 dark:text-green-400">
                          ✅ {item.solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="categories" className="space-y-6">
            {categories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`w-4 h-4 ${category.color} rounded-full`}></div>
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3">优化要点：</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {category.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium">对比示例：</h4>
                    <div className="space-y-2">
                      <div className="p-3 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg">
                        <p className="text-sm">
                          <span className="font-medium text-red-700 dark:text-red-400">❌ 不好的示例：</span>
                          <br />
                          {category.example.bad}
                        </p>
                      </div>
                      <div className="p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                        <p className="text-sm">
                          <span className="font-medium text-green-700 dark:text-green-400">✅ 优化后的示例：</span>
                          <br />
                          {category.example.good}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="advanced" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                  高级技巧与最佳实践
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {bestPractices.map((practice, index) => (
                    <div key={index} className="border-l-4 border-purple-500 pl-4">
                      <h3 className="font-semibold mb-2">{practice.title}</h3>
                      <p className="text-muted-foreground mb-3">{practice.description}</p>
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-sm font-mono">{practice.example}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>提示词模板</CardTitle>
                <CardDescription>
                  复制这些模板并根据您的需求进行调整
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-medium">通用模板：</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">
                      作为一位[专业角色]，请帮我[具体任务]。<br />
                      背景信息：[提供相关背景]<br />
                      具体要求：[列出详细要求]<br />
                      输出格式：[指定格式]<br />
                      质量标准：[设定标准]
                    </code>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium">分析类模板：</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">
                      请对[分析对象]进行深入分析，包括：<br />
                      1. 现状分析<br />
                      2. 优势劣势<br />
                      3. 机遇挑战<br />
                      4. 解决方案<br />
                      5. 实施建议<br />
                      要求使用数据支撑，提供具体案例。
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="examples" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>实际应用案例</CardTitle>
                <CardDescription>
                  看看其他用户是如何优化提示词的
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-lg p-4">
                    <Badge className="mb-3">商业分析</Badge>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-red-600 mb-2">原始提示词：</h4>
                        <p className="text-sm bg-red-50 dark:bg-red-950 p-3 rounded">
                          帮我分析一下电商行业
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground mx-auto" />
                      <div>
                        <h4 className="font-medium text-green-600 mb-2">优化后：</h4>
                        <p className="text-sm bg-green-50 dark:bg-green-950 p-3 rounded">
                          作为资深电商分析师，请对中国B2C电商行业进行全面分析。重点关注：1) 2024年市场规模和增长趋势 2) 主要玩家竞争格局（阿里、京东、拼多多） 3) 消费者行为变化 4) 技术创新影响 5) 未来3年发展预测。要求：提供准确数据支撑，包含图表建议，总字数2000字，适合投资者阅读。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <Badge className="mb-3">技术开发</Badge>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-red-600 mb-2">原始提示词：</h4>
                        <p className="text-sm bg-red-50 dark:bg-red-950 p-3 rounded">
                          写一个登录功能
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground mx-auto" />
                      <div>
                        <h4 className="font-medium text-green-600 mb-2">优化后：</h4>
                        <p className="text-sm bg-green-50 dark:bg-green-950 p-3 rounded">
                          请用React + TypeScript开发一个完整的用户登录组件，包含：1) 用户名/邮箱和密码输入框 2) 表单验证（必填、邮箱格式、密码强度） 3) 记住我选项 4) 登录状态管理 5) 错误提示处理 6) 响应式设计。技术要求：使用React Hook Form，集成JWT认证，包含完整的TypeScript类型定义，提供详细注释和使用说明。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  社区案例分享
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">
                    更多实用案例正在收集中...
                  </p>
                  <Button asChild>
                    <Link to="/optimize">
                      现在就试试优化您的提示词
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <Card className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 border-purple-200">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">准备开始优化您的提示词？</h3>
            <p className="text-muted-foreground mb-4">
              运用这些技巧，让AI更好地理解您的需求
            </p>
            <Button asChild className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700">
              <Link to="/optimize">
                立即开始优化
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Guide;
