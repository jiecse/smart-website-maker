
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Wand2, Menu, Home, History, BookOpen, Settings, Github } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: '首页', icon: Home },
    { path: '/optimize', label: '优化提示词', icon: Wand2 },
    { path: '/history', label: '历史记录', icon: History },
    { path: '/guide', label: '使用指南', icon: BookOpen },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleGithubClick = () => {
    // 这里可以添加GitHub连接逻辑
    // 目前跳转到Lovable的GitHub集成说明页面
    window.open('https://docs.lovable.dev/tips-tricks/github-integration', '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center space-x-2 mr-6">
          <div className="h-8 w-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Wand2 className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            AI提示词大师
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium flex-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-2 transition-colors hover:text-foreground/80 ${
                isActive(item.path) 
                  ? 'text-foreground border-b-2 border-purple-500 pb-1' 
                  : 'text-foreground/60'
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-6">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="h-8 w-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Wand2 className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl">AI提示词大师</span>
              </Link>
              
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
              
              <Button
                onClick={handleGithubClick}
                variant="outline"
                className="flex items-center space-x-2 justify-start px-3 py-2"
              >
                <Github className="h-5 w-5" />
                <span>连接 GitHub</span>
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex items-center space-x-2 ml-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleGithubClick}
            className="hidden md:flex"
          >
            <Github className="h-5 w-5" />
          </Button>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700"
          >
            <Link to="/optimize">开始优化</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
