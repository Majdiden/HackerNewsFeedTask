import { ArticleCard } from '../components/ArticleCard';
import { getArticle, getPaginatedArticles } from '../api/articles';
import { useQuery } from '@tanstack/react-query';
import { useState } from "react";
import { PaginationControls } from '../components/PaginationControls';
import { Skeleton } from '@/components/ui/skeleton';

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { data: articles } = useQuery({
    queryKey: ['articles', itemsPerPage, currentPage],
    queryFn: () => getPaginatedArticles(itemsPerPage, currentPage),
  });

  const [articleData, setArticleData] = useState<any[]>([]);

  useQuery({
    queryKey: ['article', { id: articles?.list[0] }],
    queryFn: () => {
      setArticleData([]);
      if (articles?.list) {
        articles.list.forEach(async (article: any) => {
          const articleData = await getArticle(article)
          setArticleData(prev => [...prev, articleData])
        })
      }
    },
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">News Feed</h1>
        {articleData.length === 0 ? <Skeleton className="h-[500px] w-full" /> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articleData?.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>}

        <div className="mt-8">
          <PaginationControls
            totalPages={articles?.totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;