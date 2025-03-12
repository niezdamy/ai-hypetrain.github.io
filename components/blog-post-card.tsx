import { Link } from "@/navigation"
import Image from "next/image"
import { Calendar, Clock, DollarSign, PiggyBank } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Post } from "@/lib/posts"
import { useTranslations } from "next-intl"
import { getAssetPath } from "@/lib/utils"

// Extend the Post type with optional blog-specific fields
interface BlogPost extends Post {
  timeSpent?: string;
  cost?: string;
  income?: string;
  imageUrl?: string;
}

interface BlogPostCardProps {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const t = useTranslations();
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      <div className="relative h-48 w-full">
        <Image src={post.imageUrl || (post.coverImage ? getAssetPath(post.coverImage) : getAssetPath("/placeholder.svg"))} alt={post.title} fill className="object-cover rounded-t-lg" />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Calendar className="mr-1 h-4 w-4" />
          <time dateTime={post.date}>{post.date}</time>
        </div>
        <Link href={{pathname: `/blog/${post.slug || post.id}`}} className="hover:underline">
          <h3 className="text-xl font-bold leading-tight">{post.title}</h3>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-2 pt-2 border-t">
        <div className="grid grid-cols-3 w-full gap-2">
          <div className="flex items-center text-sm">
            <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
            <span title={t('blogPost.timeSpent')}>{post.timeSpent || "N/A"}</span>
          </div>
          <div className="flex items-center text-sm">
            <DollarSign className="mr-1 h-4 w-4 text-muted-foreground" />
            <span title={t('blogPost.cost')}>{post.cost || "N/A"}</span>
          </div>
          <div className="flex items-center text-sm">
            <PiggyBank className="mr-1 h-4 w-4 text-muted-foreground" />
            <span title={t('blogPost.income')}>{post.income || "N/A"}</span>
          </div>
        </div>
        <div className="w-full flex justify-end mt-2">
          <Link href={{pathname: `/blog/${post.slug || post.id}`}} className="text-primary hover:underline text-sm">
            {t('Blog.readMore')}
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

