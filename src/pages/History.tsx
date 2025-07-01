
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { promptService } from '@/services/promptService';
import { Prompt } from '@/types';
import { 
  History as HistoryIcon, 
  Search, 
  Copy, 
  Trash2, 
  Star, 
  Calendar,
  Filter,
  Archive,
  TrendingUp
} from 'lucide-react';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';

const History = () => {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [filteredPrompts, setFilteredPrompts] = useState<Prompt[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const { toast } = useToast();

  const categories = [
    { value: 'all', label: '全部类别' },
    { value: 'creative', label: '创意写作' },
    { value: 'technical', label: '技术开发' },
    { value: 'business', label: '商业分析' },
    { value: 'educational', label: '教育培训' },
    { value: 'research', label: '学术研究' }
  ];

  useEffect(() => {
    loadPrompts();
  }, []);

  useEffect(() => {
    filterAndSortPrompts();
  }, [prompts, searchTerm, categoryFilter, sortBy]);

  const loadPrompts = () => {
    const loadedPrompts = promptService.getPrompts();
    setPrompts(loadedPrompts);
  };

  const filterAndSortPrompts = () => {
    let filtered = [...prompts];

    // 搜索过滤
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(prompt => 
        prompt.original.toLowerCase().includes(term) ||
        prompt.optimized.toLowerCase().includes(term) ||
        prompt.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }

    // 类别过滤
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(prompt => prompt.category === categoryFilter);
    }

    // 排序
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        default:
          return 0;
      }
    });

    setFilteredPrompts(filtered);
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

  const handleDelete = (id: string) => {
    promptService.deletePrompt(id);
    loadPrompts();
    toast({
      title: '删除成功',
      description: '记录已从历史中删除',
    });
  };

  const handleRating = (id: string, rating: number) => {
    promptService.updatePromptRating(id, rating);
    loadPrompts();
    toast({
      title: '评分已保存',
      description: `您给出了 ${rating} 星评分`,
    });
  };

  const getCategoryLabel = (category: string) => {
    return categories.find(c => c.value === category)?.label || category;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      creative: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
      technical: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      business: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      educational: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      research: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  };

  const renderStars = (rating: number, promptId: string) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 cursor-pointer transition-colors ${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300 hover:text-yellow-400'
            }`}
            onClick={() => handleRating(promptId, star)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="container py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-lg">
              <HistoryIcon className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">优化历史</h1>
              <p className="text-muted-foreground">查看和管理您的提示词优化记录</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Archive className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="text-2xl font-bold">{prompts.length}</p>
                    <p className="text-sm text-muted-foreground">总优化次数</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-2xl font-bold">
                      {prompts.filter(p => p.rating && p.rating >= 4).length}
                    </p>
                    <p className="text-sm text-muted-foreground">高质量优化</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <div>
                    <p className="text-2xl font-bold">
                      {prompts.length > 0 
                        ? (prompts.reduce((sum, p) => sum + (p.rating || 0), 0) / prompts.length).toFixed(1)
                        : '0.0'
                      }
                    </p>
                    <p className="text-sm text-muted-foreground">平均评分</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="搜索提示词..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">最新优化</SelectItem>
                  <SelectItem value="oldest">最早优化</SelectItem>
                  <SelectItem value="rating">按评分排序</SelectItem>
                </SelectContent>
              </Select>

              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <span>共 {filteredPrompts.length} 条记录</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        {filteredPrompts.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <Archive className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">暂无优化记录</h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm || categoryFilter !== 'all' 
                  ? '没有找到符合条件的记录' 
                  : '开始您的第一次提示词优化吧！'
                }
              </p>
              <Button asChild>
                <a href="/optimize">开始优化</a>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredPrompts.map((prompt) => (
              <Card key={prompt.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getCategoryColor(prompt.category)}>
                          {getCategoryLabel(prompt.category)}
                        </Badge>
                        {prompt.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {format(prompt.createdAt, 'yyyy年MM月dd日 HH:mm', { locale: zhCN })}
                        </div>
                        {prompt.rating && (
                          <div className="flex items-center gap-1">
                            {renderStars(prompt.rating, prompt.id)}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopy(prompt.optimized)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(prompt.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2 text-muted-foreground">原始提示词：</h4>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-sm leading-relaxed">{prompt.original}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm mb-2 text-muted-foreground">优化后：</h4>
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 p-3 rounded-lg border">
                      <p className="text-sm leading-relaxed">{prompt.optimized}</p>
                    </div>
                  </div>

                  {!prompt.rating && (
                    <div className="pt-2 border-t">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">为这次优化评分：</span>
                        {renderStars(0, prompt.id)}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
