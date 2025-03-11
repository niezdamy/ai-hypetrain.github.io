import { Link } from "@/navigation"
import Image from "next/image"
import { Calendar, Clock, DollarSign, PiggyBank } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  timeSpent: string
  cost: string
  income: string
  imageUrl: string
}

interface BlogPostCardProps {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      <div className="relative h-48 w-full">
        <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-t-lg" />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Calendar className="mr-1 h-4 w-4" />
          <time dateTime={post.date}>{post.date}</time>
        </div>
        <Link href={`/blog/${post.id}`} className="hover:underline">
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
            <span>{post.timeSpent}</span>
          </div>
          <div className="flex items-center text-sm">
            <DollarSign className="mr-1 h-4 w-4 text-muted-foreground" />
            <span>{post.cost}</span>
          </div>
          <div className="flex items-center text-sm">
            <PiggyBank className="mr-1 h-4 w-4 text-muted-foreground" />
            <span>{post.income}</span>
          </div>
        </div>
        <div className="w-full flex justify-end mt-2">
          <Link href={`/blog/${post.id}`} className="text-primary hover:underline text-sm">
            Read more
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

