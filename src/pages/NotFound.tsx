import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Button asChild>
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;