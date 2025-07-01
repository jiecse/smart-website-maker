
import { Link } from 'react-router-dom';
import { Wand2, Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Wand2 className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg">AI提示词大师</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              专业的AI提示词优化平台，帮助您获得更好的AI交互体验。
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold">产品功能</h4>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link to="/optimize" className="hover:text-foreground transition-colors">提示词优化</Link>
              <Link to="/history" className="hover:text-foreground transition-colors">历史记录</Link>
              <Link to="/guide" className="hover:text-foreground transition-colors">使用指南</Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">资源</h4>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link to="/guide" className="hover:text-foreground transition-colors">入门教程</Link>
              <a href="#" className="hover:text-foreground transition-colors">API文档</a>
              <a href="#" className="hover:text-foreground transition-colors">常见问题</a>
              <a href="#" className="hover:text-foreground transition-colors">社区论坛</a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">联系我们</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © 2024 AI提示词大师. 保留所有权利.
          </p>
          <nav className="flex gap-4 text-xs text-muted-foreground mt-4 sm:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">隐私政策</a>
            <a href="#" className="hover:text-foreground transition-colors">服务条款</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie政策</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
