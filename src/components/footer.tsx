import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-headline text-lg font-bold text-primary mb-2">
              Nordiska Solutions
            </h3>
            <p className="text-sm text-muted-foreground">
              Leading the way in Nordic cleantech innovation for a sustainable
              future.
            </p>
          </div>
          <div className="grid gap-4 md:col-span-2 md:grid-cols-3">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Navigate</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nordiska Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
