
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Wand2, 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Brain,
  Lightbulb
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: '智能分析',
      description: '深度解析您的提示词结构，识别优化机会',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop'
    },
    {
      icon: Lightbulb,
      title: '专业优化',
      description: '基于最佳实践自动优化提示词效果',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop'
    },
    {
      icon: Target,
      title: '精准匹配',
      description: '针对不同场景提供个性化优化方案',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
    },
    {
      icon: TrendingUp,
      title: '效果提升',
      description: '显著提高AI响应质量和准确度',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    }
  ];

  const stats = [
    { number: '10,000+', label: '提示词优化' },
    { number: '5,000+', label: '活跃用户' },
    { number: '98%', label: '满意度' },
    { number: '24/7', label: '在线服务' }
  ];

  const categories = [
    { name: '创意写作', count: '1,200+', color: 'bg-pink-500' },
    { name: '技术开发', count: '800+', color: 'bg-blue-500' },
    { name: '商业分析', count: '600+', color: 'bg-green-500' },
    { name: '教育培训', count: '400+', color: 'bg-yellow-500' },
    { name: '学术研究', count: '300+', color: 'bg-purple-500' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-purple-950 dark:via-blue-950 dark:to-indigo-950"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23a855f7" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Badge variant="outline" className="mb-4 border-purple-200 text-purple-700">
                <Sparkles className="w-3 h-3 mr-1" />
                全新AI驱动
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                让AI理解你的
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  真正意图
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                专业的AI提示词优化平台，通过智能分析和专业建议，让您的每一次AI对话都更加精准高效。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-lg px-8 py-3"
                >
                  <Link to="/optimize">
                    立即开始优化
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-3">
                  <Link to="/guide">了解更多</Link>
                </Button>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop" 
                  alt="AI优化界面预览"
                  className="rounded-2xl shadow-2xl border"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full p-4">
                  <Wand2 className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-t">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Zap className="w-3 h-3 mr-1" />
              核心功能
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              为什么选择我们？
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              我们提供全方位的AI提示词优化服务，从分析到优化，从建议到实施，让您的AI交互体验质的飞跃。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur rounded-full p-3">
                    <feature.icon className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              热门优化类别
            </h2>
            <p className="text-xl text-muted-foreground">
              涵盖各个领域的专业提示词优化服务
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <div className={`w-12 h-12 ${category.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <Wand2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} 个优化案例</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <CheckCircle className="w-3 h-3 mr-1" />
                显著优势
              </Badge>
              
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                让每一次AI对话都
                <span className="text-purple-600">更有价值</span>
              </h2>
              
              <div className="space-y-4">
                {[
                  '提高AI响应质量高达85%',
                  '减少无效交互次数60%',
                  '节省沟通时间平均40%',
                  '获得更精准的结果输出'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                asChild 
                size="lg" 
                className="mt-8 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700"
              >
                <Link to="/optimize">立即体验</Link>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                alt="数据分析图表"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">优化成功率 98.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            准备开始您的AI优化之旅？
          </h2>
          <p className="text-xl mb-8 opacity-90">
            加入已经在使用我们服务的数千名用户，体验AI交互的全新境界
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-3"
            >
              <Link to="/optimize">开始免费优化</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-purple-600"
            >
              <Link to="/guide">查看使用指南</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
