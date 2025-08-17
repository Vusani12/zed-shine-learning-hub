import ConstructionHeader from "@/components/layout/ConstructionHeader";
import ConstructionFooter from "@/components/layout/ConstructionFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import zimbabweConstruction from "@/assets/zimbabwe-construction-1.jpg";
import zimbabweResidential from "@/assets/zimbabwe-residential.jpg";
import zimbabweCommercial from "@/assets/zimbabwe-commercial.jpg";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Your Dream Home in Zimbabwe: A Complete Guide",
      excerpt: "Essential tips for planning and executing residential construction projects in Zimbabwe, from permits to completion.",
      content: "When planning to build your dream home in Zimbabwe, proper preparation is key to success...",
      author: "Chenesai Team",
      date: "2024-01-15",
      category: "Residential",
      image: zimbabweResidential,
      featured: true
    },
    {
      id: 2,
      title: "Modern Construction Materials Available in Zimbabwe",
      excerpt: "Explore the latest building materials and techniques being used in contemporary Zimbabwean construction.",
      content: "The construction industry in Zimbabwe has evolved significantly, with new materials and techniques...",
      author: "Engineering Team",
      date: "2024-01-10",
      category: "Materials",
      image: zimbabweConstruction,
      featured: false
    },
    {
      id: 3,
      title: "Sustainable Building Practices for the Zimbabwean Climate",
      excerpt: "How to design and build structures that work harmoniously with Zimbabwe's unique climate conditions.",
      content: "Zimbabwe's climate presents unique challenges and opportunities for sustainable construction...",
      author: "Sustainability Expert",
      date: "2024-01-05",
      category: "Sustainability",
      image: zimbabweCommercial,
      featured: false
    },
    {
      id: 4,
      title: "Understanding Building Regulations in Zimbabwe",
      excerpt: "Navigate the complex world of building permits, regulations, and compliance requirements.",
      content: "Building regulations in Zimbabwe are designed to ensure safety, structural integrity...",
      author: "Legal Team",
      date: "2023-12-28",
      category: "Regulations",
      image: zimbabweConstruction,
      featured: false
    },
    {
      id: 5,
      title: "Cost-Effective Construction Solutions for Small Budgets",
      excerpt: "Practical strategies to maximize value and quality while keeping construction costs manageable.",
      content: "Building on a budget doesn't mean compromising on quality. Here are proven strategies...",
      author: "Project Manager",
      date: "2023-12-20",
      category: "Budget",
      image: zimbabweResidential,
      featured: false
    },
    {
      id: 6,
      title: "The Future of Commercial Construction in Zimbabwe",
      excerpt: "Trends and innovations shaping the commercial construction landscape in Zimbabwe.",
      content: "The commercial construction sector in Zimbabwe is experiencing rapid transformation...",
      author: "Industry Analyst",
      date: "2023-12-15",
      category: "Commercial",
      image: zimbabweCommercial,
      featured: false
    }
  ];

  const categories = ["All", "Residential", "Commercial", "Materials", "Sustainability", "Regulations", "Budget"];

  return (
    <div className="min-h-screen bg-background">
      <ConstructionHeader />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Construction <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed with the latest construction tips, industry trends, and expert advice 
              for building in Zimbabwe.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Badge key={category} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            {blogPosts.filter(post => post.featured).map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <Badge className="w-fit mb-4">{post.category}</Badge>
                    <CardTitle className="text-2xl mb-4">{post.title}</CardTitle>
                    <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Button className="w-fit">
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <Card key={post.id} className="overflow-hidden h-full flex flex-col">
                  <div className="relative h-48">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="flex-grow">
                    <Badge className="w-fit mb-2">{post.category}</Badge>
                    <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 md:py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with Construction Tips
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest construction insights, 
              tips, and industry news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <ConstructionFooter />
    </div>
  );
};

export default Blog;