interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="py-16 bg-muted/30">
      <div className="container px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {description && (
          <p className="text-xl text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}
