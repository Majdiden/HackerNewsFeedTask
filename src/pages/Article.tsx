import { useParams, useNavigate } from 'react-router-dom';
import { articles } from '../data/mockData';
import { Heart, MessageSquare, Share2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useQuery } from '@tanstack/react-query';
import { getArticle } from '../api/articles';
import { Skeleton } from '@/components/ui/skeleton';
export const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const { data: article } = useQuery({
    queryKey: ['article', id],
    queryFn: () => getArticle(Number(id)),
  });

  // const article = articles.find((a) => a.id === id);

  if (!article) {
    return <Skeleton className="h-[300px] w-full" />
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
        src={`https://picsum.photos/200/300?random=${article.id}`}
        alt={article.title}
        className="w-full h-[400px] object-cover rounded-lg mb-8"
      />

      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">{article.title}</h1>

        <div className="flex items-center space-x-4">
          <img
            src={`https://picsum.photos/200/300?random=${article.id}`}
            alt={article.title}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-medium text-gray-900">{article.by}</p>
            <p className="text-sm text-gray-500">{article.time ? new Date(article.time).toLocaleDateString() : ''}</p>
          </div>
        </div>

        {/* <div className="prose max-w-none">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700">
              {paragraph}
            </p>
          ))}
        </div> */}

        <div className="flex items-center space-x-6 pt-6 border-t">
          <span>Score: </span>
          <span>{article.score}</span>
        </div>
      </div>
    </div>
  );
};