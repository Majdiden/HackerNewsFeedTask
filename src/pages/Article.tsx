import { useParams, useNavigate } from 'react-router-dom';
import { articles } from '../data/mockData';
import { Heart, MessageSquare, Share2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return <div>Article not found</div>;
  }

  const handleLike = () => {
    toast({
      title: "Article liked!",
      description: "This article has been added to your likes.",
    });
  };

  const handleShare = () => {
    toast({
      title: "Link copied!",
      description: "Article link has been copied to your clipboard.",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => navigate('/')}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Feed
      </Button>
      
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-[400px] object-cover rounded-lg mb-8"
      />
      
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">{article.title}</h1>
        
        <div className="flex items-center space-x-4">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-medium text-gray-900">{article.author.name}</p>
            <p className="text-sm text-gray-500">{article.createdAt}</p>
          </div>
        </div>

        <div className="prose max-w-none">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex items-center space-x-6 pt-6 border-t">
          <Button
            variant="ghost"
            className="flex items-center space-x-2"
            onClick={handleLike}
          >
            <Heart className="w-5 h-5" />
            <span>{article.likes}</span>
          </Button>
          
          <Button
            variant="ghost"
            className="flex items-center space-x-2"
          >
            <MessageSquare className="w-5 h-5" />
            <span>{article.comments}</span>
          </Button>
          
          <Button
            variant="ghost"
            className="flex items-center space-x-2"
            onClick={handleShare}
          >
            <Share2 className="w-5 h-5" />
            <span>{article.shares}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};